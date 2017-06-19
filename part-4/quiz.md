When you run a command in the terminal, where does BASH look for that command?
  the $PATH
On a UNIX computer, how do you stop a running process?
  type kill and then the PID into the terminal
What packages do you have installed via homebrew?
autoconf	freetype	jbig2dec	libksba		libyaml		n		readline
automake	ghostscript	jhead		libpng		little-cms2	openssl		redis
chromedriver	gmp		jpeg		libtiff		mongodb		ossp-uuid	wget
cmake		imagemagick	libgpg-error	libtool		mysql55		pkg-config
On a UNIX computer, how do you find the process id of a running process?
  ps ax | grep ::nameOfProcess (or just ps aux to see all running processes)
In a terminal, what does control-c do?
  quit/kill whatever is running in that tab of terminal (for example, a server)
In a terminal, what does control-a do?
  go to the beginning of the line
In a terminal, what does control-e do?
  go to the end of the line
What keyboard shortcut do you use to split the screen in your editor?
  cmd-k then arrow, but that copies the file, so I usually just drag my tabs around, which works great!
What keyboard shortcut do you use to split the screen in your terminal?
  execute the command 'screen', then control-a shift-S
When a terminal command completes, how can you tell if it was successful or not?
  If it's successful it will either output the result or nothing at all, but if it's unsuccesful, it will show errors. So, if there is not an error, the command was successful.
What does your ~/.gitconfig have in it? (paste the whole file here)
[user]
name = Danielle Gellis
email = danisyellis@gmail.com

[alias]
co = checkout
st = status
br = branch
hist = log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short
type = cat-file -t
dump = cat-file -p
[push]
default = simple
[core]
excludesfile = /Users/danisyellis/.gitignore
What is the difference between a relative and absolute path?
  a relative path is from where I currently am whereas an absolute path is from the root of the directory
Lets say you have the following file structure

~
└── Projects
    ├── pinterest-for-dogs
    │   ├── README.md
    │   └── package.json
    └── linkedin-for-dancers
        ├── README.md
        └── package.json
And you were in the linkedin-for-dancers folder. What command would you use to change folders to the pinterest-for-dogs folder?
  cd ../pinterest-for-dogs
What keyboard shortcut do you use, in your editor, when you want to open a specific file?
  cmd-t
What files or folders do you want all git repositories to ignore?
  node_modules, .DS_Store, any file with secrets like api keys or passwords
What is the main difference between == and === in JavaScript?
  == does type coercion and === does not.
