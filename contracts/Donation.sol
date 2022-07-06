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
  mapping(address => IsRegistered) public registeredUsers;

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

  struct IsRegistered {
    bool status;
    string userType;
    uint256 id;
  }

  struct DonationItem {
    uint256 id;
    address payable owner;
    User user;
    // Doners doners;
    uint256 donersCount;
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
  function createDonation(DonationItem memory donation_, uint256 id_)
    public
    payable
  {
    //validating inputs
    // require(msg.value > 0, 'Price must be at least 1 wei');
    require(bytes(donation_.hash).length > 0, 'Image Hash is required');
    require(bytes(donation_.description).length > 0, 'Description is required');
    // require(bytes(_endDate).length > 0, 'End Date is required');
    require(bytes(donation_.category).length > 0, 'Category is required');
    require(bytes(donation_.title).length > 0, 'Title is required');
    // require(bytes(donation_.purpose).length > 0, 'Purpose is required');
    // require(bytes(_targetAmount).length > 0, 'Targeted amount is required');
    require(msg.sender != address(0x0));

    donationCount++;

    DonationItem storage donation = idToDonationItem[donationCount];

    donation.id = donationCount;
    donation.owner = payable(address(msg.sender));

    // check if user is already registered
    if (registeredUsers[msg.sender].status == false) {
      usersCount = usersCount + 1;
      donation.user.id = usersCount;
      donation.user._address = msg.sender;
      donation.user.userType = donation_.user.userType;
      donation.user.country = donation_.user.country;
      donation.user.city = donation_.user.city;
      donation.user.email = donation_.user.email;
      donation.user.residenceAddress = donation_.user.residenceAddress;
      donation.user.isRegistered = true;
      donation.user.website = donation_.user.website;
      donation.user.facebookUrl = donation_.user.facebookUrl;
      donation.user.twitterUrl = donation_.user.twitterUrl;
      donation.user.instagramUrl = donation_.user.instagramUrl;
      donation.user.youtubeUrl = donation_.user.youtubeUrl;
      donation.user.hash = donation_.user.hash;

      users[usersCount].id = usersCount;
      users[usersCount]._address = msg.sender;
      users[usersCount].userType = donation_.user.userType;
      users[usersCount].country = donation_.user.country;
      users[usersCount].city = donation_.user.city;
      users[usersCount].email = donation_.user.email;
      users[usersCount].residenceAddress = donation_.user.residenceAddress;
      users[usersCount].isRegistered = true;
      users[usersCount].website = donation_.user.website;
      users[usersCount].facebookUrl = donation_.user.facebookUrl;
      users[usersCount].twitterUrl = donation_.user.twitterUrl;
      users[usersCount].instagramUrl = donation_.user.instagramUrl;
      users[usersCount].youtubeUrl = donation_.user.youtubeUrl;
      users[usersCount].hash = donation_.user.hash;
      registeredUsers[msg.sender].status = true;
      registeredUsers[msg.sender].userType = donation_.user.userType;
      registeredUsers[msg.sender].id = usersCount;
    } else {
      // donation.user.id = users[id_].id;
      console.log(id_);
      console.log('user country', users[id_].country);

      donation.user.id = users[id_].id;
      donation.user._address = msg.sender;
      donation.user.userType = users[id_].userType;
      donation.user.country = users[id_].country;
      donation.user.city = users[id_].city;
      donation.user.email = users[id_].email;
      donation.user.residenceAddress = users[id_].residenceAddress;
      donation.user.isRegistered = true;
      donation.user.website = users[id_].website;
      donation.user.facebookUrl = users[id_].facebookUrl;
      donation.user.twitterUrl = users[id_].twitterUrl;
      donation.user.instagramUrl = users[id_].instagramUrl;
      donation.user.youtubeUrl = users[id_].youtubeUrl;
      donation.user.hash = donation_.user.hash;
    }

    //add user
    donation.donationsRaised = 0;
    donation.donersCount = 0;

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
  function addDonation(uint256 _id) public payable {
    require(_id > 0 && _id <= donationCount);
    DonationItem storage donation = idToDonationItem[_id];
    //check date if it expired.
    if (donation.donationsRaised >= donation.targetedAmount) {
      donation.donationstatus.completed = true;
    }
    address payable _owner = donation.owner;
    uint256 fnum = 17;
    uint256 snum = 10;
    uint256 percentage = fnum.div(snum);
    uint256 percent = 100;
    uint256 percentile = percent.div(percentage);
    uint256 deduction = msg.value.div(percentile);
    // uint256 deduction = ((msg.value)/(100/_percentage));
    _owner.transfer(msg.value.sub(deduction));
    //tranfer amount to business address
    address payable caddr = companyAddress;
    caddr.transfer(deduction);

    amountRaised = amountRaised + msg.value;
    donation.donationsRaised = donation.donationsRaised + msg.value;
    // donation.donersCount = donersCount;
    donation.donersCount = donation.donersCount + 1;
    donersCount++;
    doners[donation.id][donation.donersCount].id = donation.donersCount;
    doners[donation.id][donation.donersCount].amount = msg.value;
    doners[donation.id][donation.donersCount].date = block.timestamp;
    doners[donation.id][donation.donersCount].doner = address(msg.sender);
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
  function isUserRegistered() public view returns (IsRegistered memory) {
    if (registeredUsers[msg.sender].status == true) {
      return registeredUsers[msg.sender];
    } else {
      return registeredUsers[msg.sender];
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

  //get single donation
  function getDonation(uint256 _id) public view returns (DonationItem memory) {
    if (idToDonationItem[_id].id == _id) {
      return idToDonationItem[_id];
      // return registeredUsers[msg.sender];
    }
  }

  //get all doners of a donatoin
  function getDonersOfDonation(uint256 _id)
    public
    view
    returns (Doners[] memory)
  {
    uint256 itemCount = idToDonationItem[_id].donersCount;
    uint256 currentIndex = 0;
    Doners[] memory items = new Doners[](itemCount);
    for (uint256 i = 0; i < itemCount; i++) {
      uint256 currentId = i + 1;
      // DonationItem storage currentItem = idToDonationItem[currentId];
      Doners storage currentItem = doners[_id][currentId];
      items[currentIndex] = currentItem;
      currentIndex += 1;
    }
    return items;
  }

  //get all donations under a category

  //get all approved donations
  //get all pending donation
  //get a single donation

  //get all doners
  function getAllDoners() public view returns (uint256) {
    return donersCount;
  }

  //get all amount raised
  function getAmountRaised() public view returns (uint256) {
    return amountRaised;
  }

  //get all users raised
  function getAllUsers() public view returns (uint256) {
    return usersCount;
  }

  //get all expired pinned donations
  //net worth of the comapny

  //get all my donations
  //get all my amount donated
  //get all my pendinge donations
}
