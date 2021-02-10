#!/bin/bash
echo "Command Line Argument 1: $1"
file_name=$1
if [ -f "$file_name" ]
then 
        echo "File exist"
else
        echo "Does not exist"
        exit
fi 

# file does exist

count_lines(){
    echo "the number of lines in the file is.."
    sed -n '$=' sample_text.txt  #using sed .... 
}
count_words(){
    egrep -n '(Lorem|model|Ipsum|will)' sample_text.txt
}

add_text(){

read varname 
echo $varname >> sample_text.txt
}

copy_and_exit(){
    mkdir solution
    cp    sample_text.txt    solution
}



while(true)
    do
    read -p "Your choice: " choice

    case $choice in
    [aA])
  	count_lines   
        ;;

    [bB])
    count_words
         ;;

    [cC])
    add_text
        ;;
    [dD])
    copy_and_exit
        ;;

    *)
        res=0
        echo "wrong choice!"
    esac

    #echo "The result is: " $res
    #exitPrompt
done
