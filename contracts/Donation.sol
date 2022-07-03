// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import 'hardhat/console.sol';
import '@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol';
import '@openzeppelin/contracts/utils/math/SafeCast.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import '@chainlink/contracts/src/v0.8/interfaces/FeedRegistryInterface.sol';

contract Donation {
  using SafeCast for int256;
  using SafeMath for uint256;

  AggregatorV3Interface internal eth_usd_price_feed;

  mapping(uint256 => DonationItem) public idToDonationItem;
  mapping(uint256 => mapping(uint256 => Doners)) public doners;
  mapping(uint256 => User) public users;
  mapping(address => bool) public registeredUsers;

  // address payable companyAddress;
  address payable companyAddress;
  uint256 public donersCount = 0;
  uint256 public donationCount = 0;
  uint256 public usersCount = 0;
  uint256 public amountRaised = 0;

  // uint256 private constant donationPercentage = 100 / 1.7;

  constructor() {
    companyAddress = payable(msg.sender);
    eth_usd_price_feed = AggregatorV3Interface(
      0x9326BFA02ADD2366b30bacB125260Af641031331
    );
  }

  struct DonationItem {
    uint256 id;
    address payable owner;
    User user;
    uint256 donationsRaised;
    uint256 startDate;
    uint256 endDate;
    uint256 targetedAmount;
    string category;
    string title;
    string hash;
    string purpose;
    string description;
    DonationStatus donationstatus;

    // bool completed;
    // bool isPinned;
    // uint256 pinnedDuration;
    // uint256 pinnedEndDate;
    // bool isVisible;
    // bool isApproved;
    // uint256 approvedDate;
  }

  struct DonationStatus {
    bool completed;
    bool isPinned;
    uint256 pinnedDuration;
    uint256 pinnedEndDate;
    bool isVisible;
    bool isApproved;
    uint256 approvedDate;
  }
  struct Doners {
    uint256 id;
    uint256 amount;
    uint256 date;
    address doner;
  }

  struct User {
    uint256 id;
    address _address;
    string userType;
    string country;
    string city;
    string email;
    string residenceAddress;
    bool isRegistered;
    string website;
    string facebookUrl;
    string twitterUrl;
    string instagramUrl;
    string youtubeUrl;
    string hash;
  }

  // event DonationItemCreated(
  //   uint256 indexed id,
  //   address owner,
  //   uint256 donationAmount,
  //   uint256 donersConut,
  //   uint256 startDate,
  //   uint256 endDate,
  //   uint256 targetPrice,
  //   string category,
  //   string title,
  //   string hash,
  //   string description,
  //   bool completed

  // );

  // event DonationTiped(
  //   uint256 indexed id,
  //   address sender,
  //   uint256 donationAmount
  // );

  //get EthUsd
  function getEthUsd() public view returns (uint256) {
    (, int256 price, , , ) = eth_usd_price_feed.latestRoundData();
    return price.toUint256();
  }

  function getLatestPrice() public view returns (int256) {
    (
      uint80 roundID,
      int256 price,
      uint256 startedAt,
      uint256 timeStamp,
      uint80 answeredInRound
    ) = eth_usd_price_feed.latestRoundData();
    // If the round is not complete yet, timestamp is 0
    require(timeStamp > 0, 'Round not complete');
    return price;
  }

  //convert eth to USD
  function convertEthUsd(uint256 _amountInUsd) public view returns (uint256) {
    uint256 EthUsd = getEthUsd();
    return _amountInUsd.mul(10**16).div(EthUsd);
  }

  //modifier function

  //create a new donation
  function createDonation(
    // string memory _imageHash,
    // string memory _description,
    // uint256 _endDate,
    // string memory _category,
    // string memory _title,
    // string memory _purpose,
    // uint256 _targetAmount,
    DonationItem memory donation_,
    User memory user
  ) public payable {
    //validating inputs
    require(msg.value > 0, 'Price must be at least 1 wei');
    require(bytes(donation_.hash).length > 0, 'Image Hash is required');
    require(bytes(donation_.description).length > 0, 'Description is required');
    // require(bytes(_endDate).length > 0, 'End Date is required');
    require(bytes(donation_.category).length > 0, 'Category is required');
    require(bytes(donation_.title).length > 0, 'Title is required');
    require(bytes(donation_.purpose).length > 0, 'Purpose is required');
    // require(bytes(_targetAmount).length > 0, 'Targeted amount is required');
    require(msg.sender != address(0x0));

    donationCount++;
    usersCount++;
    DonationItem storage donation = idToDonationItem[donationCount];

    donation.id = donationCount;
    donation.owner = payable(address(msg.sender));

    // check if user is already registered
    if (registeredUsers[msg.sender] == false) {
      donation.user.id = usersCount;
      donation.user._address = msg.sender;
      donation.user.userType = user.userType;
      donation.user.country = user.country;
      donation.user.city = user.city;
      donation.user.email = user.email;
      donation.user.residenceAddress = user.residenceAddress;
      donation.user.isRegistered = true;
      donation.user.website = user.website;
      donation.user.facebookUrl = user.facebookUrl;
      donation.user.twitterUrl = user.twitterUrl;
      donation.user.instagramUrl = user.instagramUrl;
      donation.user.youtubeUrl = user.youtubeUrl;
      donation.user.hash = user.hash;

      users[usersCount].id = usersCount;
      users[usersCount]._address = msg.sender;
      users[usersCount].userType = user.userType;
      users[usersCount].country = user.country;
      users[usersCount].city = user.city;
      users[usersCount].email = user.email;
      users[usersCount].residenceAddress = user.residenceAddress;
      users[usersCount].isRegistered = true;
      users[usersCount].website = user.website;
      users[usersCount].facebookUrl = user.facebookUrl;
      users[usersCount].twitterUrl = user.twitterUrl;
      users[usersCount].instagramUrl = user.instagramUrl;
      users[usersCount].youtubeUrl = user.youtubeUrl;
      users[usersCount].hash = user.hash;
      registeredUsers[msg.sender] = true;
    }

    //add user
    donation.donationsRaised = 0;
    donation.startDate = block.timestamp;
    donation.endDate = donation_.endDate;
    donation.targetedAmount = donation_.targetedAmount;
    donation.category = donation_.category;
    donation.title = donation_.title;
    donation.hash = donation_.hash;
    donation.category = donation_.category;
    donation.purpose = donation_.purpose;
    donation.description = donation_.description;

    donation.donationstatus.completed = false;
    donation.donationstatus.isPinned = false;
    donation.donationstatus.isVisible = false;
    donation.donationstatus.isApproved = false;
    donation.donationstatus.approvedDate = 0;
    donation.donationstatus.pinnedDuration = 0;
    donation.donationstatus.pinnedEndDate = 0;
  }

  //add a donation
  function addDonation(uint256 _id, uint256 _percentage) public payable {
    require(_id > 0 && _id <= donationCount);
    DonationItem storage donation = idToDonationItem[_id];
    //check date if it expired.
    if (donation.donationsRaised >= donation.targetedAmount) {
      donation.donationstatus.completed = true;
    }
    address payable _owner = donation.owner;
    uint256 percent = 100;
    uint256 percentile = percent.div(_percentage);
    uint256 deduction = msg.value.div(percentile);
    // uint256 deduction = ((msg.value)/(100/_percentage));
    _owner.transfer(msg.value.sub(deduction));
    //tranfer amount to business address
    address payable caddr = companyAddress;
    caddr.transfer(deduction);

    amountRaised = amountRaised + msg.value;
    donation.donationsRaised = donation.donationsRaised + msg.value;
    donersCount++;
    doners[donation.id][donersCount].id = donersCount;
    doners[donation.id][donersCount].amount = msg.value;
    doners[donation.id][donersCount].date = block.timestamp;
    doners[donation.id][donersCount].doner = address(msg.sender);
    idToDonationItem[_id] = donation;
  }

  //approve a donation
  function approveDonation(uint256 _id) public {
    require(_id > 0 && _id <= donationCount, 'donation id not valid');
    DonationItem storage donation = idToDonationItem[_id];
    require(donation.donationstatus.isApproved == false);
    require(donation.donationstatus.isVisible == false);
    donation.donationstatus.isApproved = true;
    donation.donationstatus.isVisible = true;
    donation.donationstatus.approvedDate = block.timestamp;
    idToDonationItem[_id] = donation;
  }

  //pin donation
  function pinDonation(
    uint256 _id,
    uint256 _duration,
    uint256 _pinnedEndDate
  ) public payable {
    require(_id > 0 && _id <= donationCount, 'donation id not valid');
    DonationItem storage donation = idToDonationItem[_id];
    require(donation.donationstatus.isPinned == false);
    require(donation.donationstatus.isApproved == true);
    require(donation.donationstatus.pinnedEndDate < block.timestamp);
    //send money to company address
    // companyAddress.tranfer(msg.value);
    address payable caddr = companyAddress;
    caddr.transfer(msg.value);
    donation.donationstatus.pinnedDuration = _duration;
    donation.donationstatus.pinnedEndDate = _pinnedEndDate;
    donation.donationstatus.isPinned = true;
    idToDonationItem[_id] = donation;
  }

  //getter functions

  //get already registered users
  function isUserRegistered() public view returns (bool) {
    if (registeredUsers[msg.sender] == true) {
      return true;
    } else {
      return false;
    }
  }

  //get all donations
  function fetchAllDonationItems() public view returns (DonationItem[] memory) {
    uint256 itemCount = donationCount;
    uint256 currentIndex = 0;
    DonationItem[] memory items = new DonationItem[](itemCount);
    for (uint256 i = 0; i < itemCount; i++) {
      uint256 currentId = i + 1;
      DonationItem storage currentItem = idToDonationItem[currentId];
      items[currentIndex] = currentItem;
      currentIndex += 1;
    }
    return items;
  }

  //get all donations under a category
  //get all pinned donations
  //get all approved donations
  //get all pending donation
  //get a single donation
  //get all doners
  //get all expired pinned donations
  //net worth of the comapny

  //get all my donations
  //get all my amount donated
  //get all my pendinge donations
}
