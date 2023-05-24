# Bring Every Buisness Online

Awesome aka Bring Every Business Online is an Open Source Initiative to make an open source collection of web-pages for every business out there. To contribute to the project, all you have to do is build a website for a store or business.

## Requirements

- [A GitHub Account](https://GitHub.com)
- [Git installed in your system](https://docs.GitHub.com/en/get-started/quickstart/set-up-git)

## How to Contribute

To participate in this open-source project all you all have to do is build a website for a nearby buisness. It could be a tea shop, fancy store or even a general store.

## Step 1: Collect the Information

In-order to build the website you need to include the images, location, if its a hotel pricing of the items etc. So as the first step you need collect all these information from a nearby shop of your choice.

## Step 2: Create a Repository

To store the code files which are required for a website you need create a repository in your account and store the code files there and later host the same.

## Step 3: Build the Website

With the information you just collected and the knowledge you gained by participating in this event build a wonderful website and after storing the code files in your repository host it via Github Page.

## Step 4: Fork this Repository

Fork this repository by clicking on the fork button on the top of this page. This will create a copy of this repository in your account.

## Step 5: Clone The Forked Repository

Now clone the forked repository to your machine:

- Using HTTPS

```sh
git clone "https://GitHub.com/<your-username>/bring-every-business-online.git"
```

- Using SSH

```sh
git clone "git@GitHub.com:<your-username>/bring-every-business-online.git"
```

Note: Replace with your GitHub username.

## Step 3 - Create a branch

Change the current working directory to the cloned repo.
For example:

```sh
cd bring-every-business-online
```

Now create a new branch with the below naming convention:

```sh
git switch -c add-store-name
```

For example:

```sh
git switch -c add-ravi-tea-shop
```

## Step 4 - Make changes and commit

- Edit the `data.json` file in the project directory `/src/data.json` to include your information.

```sh
[
......
  {
  # info of previous user
  },
    {
    "name": "Aswin Asok", # Your name -> Not longer than 30 characters
    "githubUsername": "AswinAsok", # Your GitHub username
    "storeName": "Sample Store", # Name of the Store -> Not longer than 30 characters
    "storeDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum finibus urna, sed ultricies magna.", # Description about the store
    "hostedLink": "https://mulearn.org", # Link to the site hosted via GitHub Pages.
    "storeImage": "/images/samplestore.jpg" # Name of your image added in the /images directory -> Image size not greater than 200KB
  }
]
```

**NOTE:**

> make sure to add your info at the end of the file, after the last user's data. Not in the middle or the top of the file so that we can test the data.
> **Otherwise the PR will be closed!**

- Add a image of your shop with the shop name as filename and add it to the `/public/images` directory.
- Image size should not be greater than **200KB**
- For the best result use a image with **1:1 ratio**

Now if you go to the project directory and enter the command `git status`, you can see the changes.

Add those changes with the `git add` command:

```sh
git add -A
```

Now commit those changes using the `git commit` command:

```sh
git commit -m "Add <store-name> to store list"
```

For example:

```sh
git commit -m "Add Ravi's Tea Shop to store list"
```

## Step 5 - Push the changes to GitHub

Push your changes to GitHub using the `git push` command:

```sh
git push -u origin <your-branch-name>
```

For example:

```sh
git push -u origin ravi-tea-shop
```

> If you enabled two-factor authentication in your GitHub account you won't be able to push via HTTPS using your accounts password. Instead you need to generate a personal access token. This can be done in the application settings of your GitHub account. Using this token as your password should allow you to push to your remote repository via HTTPS. Use your username as usual.

[Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

## Step 6 - Submit your changes for review

If you go to your repository page on GitHub you will see a `compare & pull request` button. Click that button.
And submit the pull request.
Soon the reviewer will merge the branch into `main`.

## Step 7 - View and share contributors badge

Once the PR is merged you can view your details [here](hhttps://awesome.mulearn.org/).
