# sea-bit

Installation steps (Windows)

1. Install linux sub system
```
 wsl --install -d Ubuntu
```
2. Restart your machine and open terminal again and run

```
 ubuntu
```
3. Install ruby dependencies
```
 sudo apt-get install git-core zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev software-properties-common libffi-dev
```
4. Install asdf version manager
```
 cd
 git clone https://github.com/excid3/asdf.git ~/.asdf
 echo '. "$HOME/.asdf/asdf.sh"' >> ~/.bashrc
 echo '. "$HOME/.asdf/completions/asdf.bash"' >> ~/.bashrc
 echo 'legacy_version_file = yes' >> ~/.asdfrc
 echo 'export EDITOR="code --wait"' >> ~/.bashrc
 exec $SHELL
```
5. Install plugins
```
 asdf plugin add ruby
 asdf plugin add nodejs
```

6. Install Ruby
```
 asdf install ruby 3.3.0
 asdf global ruby 3.3.0

 # Update to the latest Rubygems version
 gem update --system

 # Confirm Ruby
 which ruby
 ruby -v
```

7. Install node
```
 asdf install nodejs 20.10.0
 asdf global nodejs 20.10.0

 which node
 #=> /home/username/.asdf/shims/node
 node -v
 #=> 20.10.0

 # Install yarn for Rails jsbundling/cssbundling or webpacker
 npm install -g yarn
```
