# server-hae

Back End Server for Front End HAE Assesment. You can find that assessment at
<https://github.com/alefl10/client-hae>

## **Setup**

It is assumed you have already installed the following on your computer:

- Node.js <https://nodejs.org/en/download/>
- npm
- MongoDB --> It deserves a more thorough explanation to guide you through the installation process as it is vital for your Data Base to be set up correctly:

    - **Windows** installation

    - Go to <https://www.mongodb.com/download-center>
    - Download the **msi** Installer and run it
    - Go through the **auto-installation**
    - Go to **Program Files** and inside the folder navigate to **MongoDB/Server/3.4/bin**
    - **Copy the path of the directory**
    - In the windows finder, look for "**Edit environment variables for your account**" and:

        1. Click Environment variables...
        2. Click Edit (under the User variables display)
        3. Click New
        4. Paste the path (you copied it previously)
        5. Click OK recursively until you exit "System Properties"

    - Start the **Command Prompt** and

    1. Type `md \data`
    2. Type `md \data\db`

    - **Mac** (UNIX systems)

    - Go to <https://www.mongodb.com/download-center>
    - Download the **tgz** file
    - Extract the file
    - Start the **Terminal** and:

    1. Change directories into your downloads directory by typing `cd Downlads/``
    2. Change directories into the extracted folder by typing `cd mongodb-osx-x86_64` (press tab and enter)
    3. Type `cd bin`
    4. Type `sudo cp * /usr/local/bin`
    5. Type `sudo mkdir -p /data/db`
    6. Type `sudo chmod 777 /data`
    7. Type `sudo chmod 777 /data/db`
    
**If this information was not helpful enough you can find a broader explanation at the official site
<https://docs.mongodb.com/manual/installation>**

## **Deploy**

**Before diving into running any files after downloading and unzipping the zip folder, you need to execute `npm install` on your terminal/console to install all the necessary dependencies (you may need to use `sudo` if you are executing this command on a Mac)**

- On a new Terminal window run `mongod`

    - If this last command did not start the mongo daemon, execute:

        1. `pgrep mongo` --> This should show a **number**
        2. `kill number`--> with number being whatever number was shown on the line above
        3. `mongod`

- On a different Terminal window, navigate into the project folder and type `npm start`, then press enter 

- If everything has been set up properly the server should be up and running now


## Seed Data

Every time the server is started the data base is cleaned up and it seeds the following data:

```javascript
    [
    {
        name: 'Alan Cruz',
        years_exp: 10,
        status: 'pending',
        date_applied: '2018-06-05T11:55:42Z',
        reviewed: false,
        description: 'An accomplished legal professional with a myriad of experience and a stellar reputation for handling all facets of litigation and trial practice.  An analytical and strategic thinker with a firm understanding of the drivers and interests impacting litigation, the legal ramifications of the workplace disciplinary process and the overall dynamics of attorney-client relations. Licensed to practice in Pennsylvania, New Jersey and the District of Columbia.',
    },
    {
        name: 'Brian Patel',
        years_exp: 13,
        status: 'accepted',
        date_applied: '2018-06-02T09:55:42Z',
        reviewed: true,
        description: 'I am a seasoned litigator in the South Florida area with 10 years worth of experience in construction, maritime and insurance defense. My current practice involves real estate (litigation and transactional) and family law as well. In addition to extensive in-court experience, I offer excellent legal research and writing skills and a dedicated focus on the timely delivery of high quality product.',
    },
    {
        name: 'Sally Collins',
        years_exp: 2,
        status: 'rejected',
        date_applied: '2018-06-05T11:55:42Z',
        reviewed: true,
        description: 'Experience in business immigration with an emphasis on the preparation, review and analysis of immigrant (PERM, I-140 immigrant petitions and AOS applications) and nonimmigrant (L-1A, L-1B, H-1B, O-1) visa petitions and applications. Work directly with large multinational clients in a broad spectrum of global industries. Advise on mergers, acquisitions and corporate reorganizations issues to ensure compliance with immigration regulations. In charge of responding to NOIR, RFE and audits.',
    },
    {
        name: 'Wendy Santiago',
        years_exp: 15,
        status: 'pending',
        date_applied: '2018-05-05T11:55:42Z',
        reviewed: false,
        description: '',
    },
    {
        name: 'Adrienne Hopkins',
        years_exp: 1,
        status: 'pending',
        date_applied: '2018-04-30T21:55:42Z',
        reviewed: false,
        description: 'Business litigation and employment litigation attorney; former law review editor; worked at top firms in Dallas, Texas for seven years before forming a private practice.',
    },
    {
        name: 'Kari Morgan',
        years_exp: 1,
        status: 'pending',
        date_applied: '2018-04-30T21:55:42Z',
        reviewed: false,
        description: 'I am an attorney with a diverse background in multiple areas of practice. I have counseled banks, corporations, and individuals at both state and federal levels.',
    },
];
```

## **Additional Info**

Do not forget to restart de server everytime you wish to see the initial (seeded) data on the front end application client-hae (Front End HAE  Assesment)
