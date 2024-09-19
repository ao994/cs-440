# cs-440
Alyssa and Karissa's ongoing project for cs-440.

## Instructions for installing

Navigate to /Client, and run the following in the command line:

```
npm install
```

Now, navigate to /Server, and run the following in the command line:

```
npm install
```

Create your config.env file in the Server folder. Note that this will not be synced to github as it contains sensitive information.

## Instructions for running

In a terminal window, in the /Server directory, run the following:
```
node --env-file=config.env server
```

Now, in a separate terminal window, in the /Client directory, run the following:
```
npm run dev
```

both must be running at the same time for the website to work correctly!
