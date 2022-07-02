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
    string memory _imageHash,
    string memory _description,
    uint256 _endDate,
    string memory _category,
    string memory _title,
    string memory _purpose,
    uint256 _targetAmount,
    string memory _userType,
    string memory _country,
    string memory _city,
    string memory _email,
    string memory _residenceAddress,
    string memory _website,
    string memory _facebookurl,
    string memory _twitterurl,
    string memory _instagramurl,
    string memory _youtubeurl,
    string memory _documenthash
  ) public payable {
    //validating inputs
    require(msg.value > 0, 'Price must be at least 1 wei');
    require(bytes(_imageHash).length > 0, 'Image Hash is required');
    require(bytes(_description).length > 0, 'Description is required');
    // require(bytes(_endDate).length > 0, 'End Date is required');
    require(bytes(_category).length > 0, 'Category is required');
    require(bytes(_title).length > 0, 'Title is required');
    require(bytes(_purpose).length > 0, 'Purpose is required');
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
      donation.user.userType = _userType;
      donation.user.country = _country;
      donation.user.city = _city;
      donation.user.email = _email;
      donation.user.residenceAddress = _residenceAddress;
      donation.user.isRegistered = true;
      donation.user.website = _website;
      donation.user.facebookUrl = _facebookurl;
      donation.user.twitterUrl = _twitterurl;
      donation.user.instagramUrl = _instagramurl;
      donation.user.youtubeUrl = _youtubeurl;
      donation.user.hash = _documenthash;

      users[usersCount].id = usersCount;
      users[usersCount]._address = msg.sender;
      users[usersCount].userType = _userType;
      users[usersCount].country = _country;
      users[usersCount].city = _city;
      users[usersCount].email = _email;
      users[usersCount].residenceAddress = _residenceAddress;
      users[usersCount].isRegistered = true;
      users[usersCount].website = _website;
      users[usersCount].facebookUrl = _facebookurl;
      users[usersCount].twitterUrl = _twitterurl;
      users[usersCount].instagramUrl = _instagramurl;
      users[usersCount].youtubeUrl = _youtubeurl;
      users[usersCount].hash = _documenthash;
      registeredUsers[msg.sender] = true;
    }

    //add user
    donation.donationsRaised = 0;
    donation.startDate = block.timestamp;
    donation.endDate = _endDate;
    donation.targetedAmount = _targetAmount;
    donation.category = _category;
    donation.title = _title;
    donation.hash = _imageHash;
    donation.category = _category;
    donation.purpose = _purpose;
    donation.description = _description;
    donation.completed = false;
    donation.isPinned = false;
    donation.isVisible = false;
    donation.isApproved = false;
    donation.approvedDate = 0;
    donation.pinnedDuration = 0;
    donation.pinnedEndDate = 0;
  }

  //add a donation
  function addDonation(uint256 _id, uint256 _percentage) public payable {
    require(_id > 0 && _id <= donationCount);
    DonationItem storage donation = idToDonationItem[_id];
    //check date if it expired.
    if (donation.donationsRaised >= donation.targetedAmount) {
      donation.completed = true;
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
    // companyAddress.tranfer(deduction);

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
    require(donation.isApproved == false);
    require(donation.isVisible == false);
    donation.isApproved = true;
    donation.isVisible = true;
    donation.approvedDate = block.timestamp;
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
    require(donation.isPinned == false);
    require(donation.isApproved == true);
    require(donation.pinnedEndDate < block.timestamp);
    //send money to company address
    // companyAddress.tranfer(msg.value);
    address payable caddr = companyAddress;
    caddr.transfer(msg.value);
    donation.pinnedDuration = _duration;
    donation.pinnedEndDate = _pinnedEndDate;
    donation.isPinned = true;
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
