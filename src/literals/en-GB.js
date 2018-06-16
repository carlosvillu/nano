module.exports = {
  HOME: 'Home',
  ABOUT_US: 'About us',
  CONTACT_US: 'Contact us',
  HOURS: 'hours',
  MINUTES: 'minutes',
  SECONDS: 'seconds',
  DESTINATION_ACCOUNT_TITLE: '1. Start by introducing your payer wallet (PW)',
  DESTINATION_ACCOUNT_DESCRIPTION: 'Make sure you OWN this wallet!',
  DESTINATION_ACCOUNT_PLACEHOLDER: 'This is your payer wallet (PW)',
  DESTINATION_ACCOUNT_INFO_TITLE: '',
  DESTINATION_ACCOUNT_INFO_DESCRIPTION:
    'Make sure you own this wallet: the nanos you transfer will end up here.',
  REQUEST_ACCOUNT_TITLE: '2. Request a Nano Privacy wallet (NPW)',
  REQUEST_ACCOUNT_DESCRIPTION:
    'Remember that your Nano Privacy wallet must be validated within 24 hrs by transferring any amount of nanos',
  COUNTDOWN_TITLE: "That's all!",
  COUNTDOWN_DESCRIPTION:
    'Now you have 24 hrs to make your first private nano transaction to your PNW.',
  REQUEST: 'Request',
  REQUEST_ERROR:
    "Something's gone wrong! Please, refresh the page and try again",
  CONTACT_TITLE: 'Feel free to send your comments and suggestions',
  SEND: 'Send',
  CONTACT_EMAIL_PLACEHOLDER: 'Your email',
  CONTACT_MESSAGE_PLACEHOLDER: 'Your message',
  ABOUT_US_TONI_BIO:
    "Tony is a seasoned backend developer, who has worked in top-end projects, both as developer and as lead manager. An early adopter of cryptocurrency, he's passionate about it and is interested in providing solutions to current issues of privacy and security. When he's not working on one of his cryptocurrency projects, you're likely to find him watching any of the Star Wars movies.",
  ABOUT_US_CARLOS_BIO:
    "Carlos is a full-stack developer with 12+ years experience in software development. He's been involved in several international web projects with millions of daily users. He likes all things JavaScript and has a passion for minimalistic, highly-scalable web architecture. Avid contributor to open-source projects and, in general, an enthusiast of a free Internet. Lately he's grown an interest in the challenges of transactions with cryptocurrency.",
  ACCOUNT_KO_TITLE: 'Remove wallet',
  ACCOUNT_KO_DESCRIPTION:
    'DO NOT send nanos to this wallet, because your money never end in your destination wallet.',
  ACCOUNT_OK_TITLE: 'You own this account',
  ACCOUNT_OK_DESCRIPTION:
    'All nanos sent to this account will end in your destination account',
  HOW_IT_IS_WORKS: 'How does it work?',
  WHAT_IT_IS_TITLE: 'WHAT’S PRIVACY NANO?',
  WHAT_IT_IS_DESCRIPTION_1:
    'Privacy Nano is a nano scrambler service; that is, it is the solution to privacy issues with nano-based transactions.',
  WHAT_IT_IS_DESCRIPTION_2:
    'Nanos allow you to make cost-free, immediate online transactions. This makes them ideal for micro transactions in the web, in contrast to other cryptocurrencies, such as bitcoins. However, a serious drawback of nanos is that they are traceable. This means that paying with nanos leaves your account exposed, so that the recipient can trace each nano back to its origin.',
  WHAT_IT_IS_DESCRIPTION_3:
    'Nano Privacy implements a randomization algorithm between two nano wallets that you must own, such that its footprint is virtually impossible to track.',

  HOW_IT_IS_WORKS_TITLE: 'HOW DOES IT WORK?',
  HOW_IT_IS_WORKS_DESCRIPTION_1:
    'In order to use Privacy Nano you only need to own two wallets. Let’s imagine that you have 1,000 nanos in wallet 1 (origin wallet, OW) and 5 nanos in wallet 2 (payer wallet, PW). Normally, you’d like to protect OW because, for example, you might not want other people to know how much nanos you own.',
  HOW_IT_IS_WORKS_DESCRIPTION_2:
    'Privacy Nano works by inserting a maze-like wallet (Privacy Nano  wallet, PNW) with hundreds of nano transactions between OW and PW. You simply need to ask Privacy Nano for a PNW and indicate only your destination account, which must always be your PW. In other words, you will be sending money to yourself, from your OW to your PW via the PNW, which will randomly distribute the amount of nanos you want to transfer into hundreds of wallets, which will in turn randomly distribute them back to your PW, in random quantities until the transfer amount is completed. Privacy Nano thus makes it impossible for the recipient to trace back the origin of the nanos further from the PW.',
  CLAIM: 'Make your Nano cryptocurrency transactions untraceable',
  FLASHMESSAGE_BETA:
    'We are in closed BETA. Please, DO NOT send nanos without reading this document carefully',
  BETA_TITLE: 'We are in closed beta',
  BETA_DESCRIPTION:
    "We are opened to a small group of users (beta testers). If you are not one of them, please don't use this service. We are in the midst of heavy development, so your money could potentially be lost. Even if you are one of our beta testers, please, DO NOT make transactions of more than 2 nanos, which is the maximum amount we will return in case an error occurs.",
  READ_MORE: 'read more',
  PAGE_ACCOUNT_URL_TITLE: 'Save this URL.',
  PAGE_ACCOUNT_URL_DESCRIPTION:
    'Using this url is the only way to go to your privacy nano wallet. DO NOT lost the URL. And DO NOT share this URL with anyone',
  ACCOUNT_ERROR_TITLE: 'Something was wrong',
  ACCOUNT_ERROR_DESCRIPTION: 'Please, reload the page'
}
