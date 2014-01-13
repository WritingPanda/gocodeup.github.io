In order to take the Codeup LAMP+J class, you must be on a Mac running OSX 10.9 Mavericks. To check what version of OSX you are running, click on the apple in the upper left corner and select `About this Mac`. If you are not running OSX 10.9, please upgrade prior to class.

[http://www.apple.com/osx/](http://www.apple.com/osx/)

## Software To Download And Install

Please download and install the following software:

### Google Chrome Web Browser

[https://www.google.com/intl/en/chrome/browser/](https://www.google.com/intl/en/chrome/browser/)

### Sublime 2 Text Editor

[http://www.sublimetext.com/](http://www.sublimetext.com/)

### Sequel Pro Database Management Tool

[http://www.sequelpro.com/](http://www.sequelpro.com/)

### iTerm2 Terminal Replacement

[http://www.iterm2.com/](http://www.iterm2.com/)

### Git

[http://git-scm.com/downloads](http://git-scm.com/downloads)

### GitHub Client for Mac

[http://mac.github.com/](http://mac.github.com/)

### Vagrant (v1.4+)

[http://www.vagrantup.com/downloads.html](http://www.vagrantup.com/downloads.html)

### Virtual Box (v4.3+)

[https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads)

## Virtual Environment Setup

In the Codeup LAMP+J class, we will be using a Virtual Machine (VM) running the LAMP stack. Please carefully follow the instructions below to setup your LAMP VM.


### Verify Dependencies

1) Open the Terminal App. Press &#8984;+SPACE, and then type: `Terminal` and hit RETURN.

2) Type `vagrant -v` into the Terminal window and press RETURN. You should see something like `Vagrant 1.4.3` print out. If instead, you see `command not found`, then Vagrant has not been installed properly. Use the link to Vagrant in the Software Install section to download and install Vagrant.

3) Type `virtualbox` into the Terminal window and press RETURN. The VirtualBox application should appear. If it does, close it by clicking the red X. If it doesn't and you receive `command not found`, then VirtualBox has not been installed properly. Use the link to VirtualBox in the Software Install section to download and install VirtualBox.

### Download Box File

Now that you have verified that the dependencies are installed properly, you need to download the Vagrant box file. Look in the pre-work email that you received from Codeup for the link to download this file. It is about 600mb in size. Download the box file to your `Downloads` directory.

### Download Codeup LAMP+J Vagrant Project

1) Download this file: [https://github.com/gocodeup/vagrant-lamp/archive/master.zip](https://github.com/gocodeup/vagrant-lamp/archive/master.zip), to your `Downloads` directory.

2) Open your `Downloads` directory in Finder and double click the zip file you just downloaded to extract it. It should be named `vagrant-lamp-master.zip`. You should now have a directory called `vagrant-lamp-master` in your `Downloads` directory.

### Import Box File and Create VM

When you reach this point, please verify you have a file called `quantal64.box`, and a folder called `vagrant-lamp-master`, in your `Downloads` directory. If you don't have both of these, please review the instructions above.

1) If your Terminal application isn't still open, re-open it.

2) In your Terminal, type: `cd ~/Downloads` and hit RETURN to change to your `Downloads` directory.

3) In your Terminal, type: `vagrant box add quantal64 quantal64.box` and hit ENTER. The command will run, and you should see a message that says: "Successfully added box 'quantal64' with provider 'virtualbox'!"

4) In your Terminal, type: `cd vagrant-lamp-master` to change to the directory you unzipped earlier.

5) In your Terminal, type: `vagrant up` to start creating your VM. First, you will see a message that says: "Bringing machine 'default' up with 'virtualbox' provider…". Within about 5 minutes, the process will complete and you will receive a message that says: "notice: Finished catalog run in XXX seconds".

6) To verify that your VM is running, browse to [http://localhost:8080](http://localhost:8080). You should receive a Codeup success page.

7) Celebrate! You're done!

## Help and Troubleshooting

If you are a Codeup student and have any questions or need assistance getting the necessary software installed, please contact us. It is very important that your computer is ready to go with all that is needed for class so we don't waste precious teaching time. Thanks!





