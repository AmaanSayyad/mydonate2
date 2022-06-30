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
  address payable companyAddress;

  uint256 public donersCount = 0;
  uint256 public donationCount = 0;
  uint256 public usersCount = 0;
  uint256 public amountRaised = 0;

  constructor() {
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
    bool isVisible;
    bool isApproved;
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
  function addDonation(
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

    //add user
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
  }

  //add a donation
  function addDonation(uint256 _id) public payable {
    require(_id > 0 && _id <= donationCount);
    DonationItem storage _donation = idToDonationItem[_id];
    require(_donation.completed == false);
    require(_donation.donationAmount <= _donation.targetPrice);

    //check date if it expired.
    if (_donation.donationAmount >= _donation.targetPrice) {
      _donation.completed = true;
    }

    address payable _owner = _donation.owner;
    _owner.transfer(msg.value);
    _donation.donationAmount = _donation.donationAmount + msg.value;
    donersCount++;
    doners[_donation.id][donersCount] = address(msg.sender);
    idToDonationItem[_id] = _donation;
    // emit DonationTiped(_id, msg.sender, msg.value);
  }
}
