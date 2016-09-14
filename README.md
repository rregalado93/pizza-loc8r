Documentation for the loc8r project.

used the following documentation to install Bootstrap:

    https://community.c9.io/t/using-bootstrap/1603
    
    https://www.youtube.com/watch?v=MqsiIp_M7lw
    
    
PUSH TO GITHUB USING SCRIPT FILE
    *create a github.sh file:
        #!/bin/bash
        # helpful: http://stackoverflow.com/questions/8482843/git-commit-bash-script

        git add .
        read -p "Commit description: " desc
        git commit -m "$desc"
        git push -u origin master
        
    *Run $ sudo chmod 775 github.sh
    *to push to github run $ ./github.sh

HOW TO RUN PROGRAM
    *npm start
    *go to https://loc8r-rregalado.c9users.io/

THEME OBTAINED FROM:
    https://github.com/thomaspark/bootswatch
    
PUSH TO HEROKU
    *$ git push heroku master
    
