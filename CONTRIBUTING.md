# How to Contribute

Thanks for reaching out to contribute to this project. Please follow the below instuctions for contrbution.

## Table of Contents

- [How to Contribute](#how-to-contribute)
  - [Table of Contents](#table-of-contents)
  - [Types of contributions we're looking for](#types-of-contributions-were-looking-for)
  - [Ground rules & expectations](#ground-rules--expectations)
  - [How to contribute](#how-to-contribute-1)
  - [Setting up your environment](#setting-up-your-environment)
  - [Community](#community)

## Types of contributions we're looking for

The project does all the basic operations of an CMS. But there is still a lot of room to improve.
Some projected features are:

- Order status E-mails
- Order Invoice E-mails
- Category Management
- Products Models and Classes for better Inventory Management
- Product Specs and Features Management
- If you have any other idea please open a pull request!

Interested in making a contribution? Read on!

## Ground rules & expectations

Before we get started, here are a few things we expect from you (and that you should expect from others):

- All credentials of Firebase and database contents are under copyright of [Tiaamo.com](https://tiaamo.com). Any sharing of Credentials and usage of Database contents without permission are to be considered as illeagal activities and will result in Leagal actions. 
- Sharing of Firebase admin login credentials i.e. User ID and Password and other secrets will be considered as illeagal activities and are punishable offence.
- Be kind and thoughtful in your conversations around this project. We all come from different backgrounds and projects, which means we likely have different perspectives on "how open source is done." Try to listen to others rather than convince them that your way is correct.
- Open Source Guides are released with a [Contributor Code of Conduct](./CODE_OF_CONDUCT.md). By participating in this project, you agree to abide by its terms.
- If you open a pull request, please ensure that your contribution passes all tests. If there are test failures, you will need to address them before we can merge your contribution.
- When adding content, please consider if it is widely valuable. Please don't add references or links to things you or your employer have created as others will do so if they appreciate it.

## How to contribute

If you'd like to contribute, start by searching through the [issues](https://github.com/soulsam480/ecom-cms/issues) and [pull requests](https://github.com/soulsam480/ecom-cms/pulls) to see whether someone else has raised a similar idea or question.

If you don't see your idea listed, and you think it fits into the goals of this guide, do one of the following:

- **If your contribution is minor,** such as a typo fix, open a pull request by creating a branch.
- **If your contribution is major,** such as a new guide, start by opening an issue first. That way, other people can weigh in on the discussion before you do any work.

## Setting up your environment

This project runs on [Vuejs](https://vuejs.org). So follow the below instructions for setting up the local dev environment.

For any issues please reach me [here](mailto:soulsam480@hotmail.com)

To get started open your terminal and run

```
git clone git@github.com:soulsam480/ecom-cms.git
cd ecom-cms
npm install
```
Please mail me [here](mailto:soulsam480@hotmail.com) for the project firebase credentials. I'm sorry for the incovenience, but being secure is foremost.

Paste the firebase credentials inside src/firebase.

```
const config = {
    apiKey: "API KEY",
    authDomain: "AUTH DOMAIN",
    databaseURL: "DATABASE URL",
    projectId: "PROJECT ID",
    storageBucket: "STORAGE BUCKET",
    messagingSenderId: "MESSAGE SENDER ID",
    appId: "APP ID",
  };

  export default config;

```

then run

```
npm run serve
```

The project dev server will run on [localhost:8080](http://localhost:8080)

## Community

Discussions about the Open Source Guides take place on this repository's [Issues](https://github.com/soulsam480/ecom-cms/issues) and [Pull Requests](https://github.com/soulsam480/ecom-cms/pulls) sections. Anybody is welcome to join these conversations.

Wherever possible, do not take these conversations to private channels, including contacting the maintainers directly. Keeping communication public means everybody can benefit and learn from the conversation.
