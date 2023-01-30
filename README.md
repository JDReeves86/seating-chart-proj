# Seating Chart Generator

This project was created at the request of my wife who wanted a simple way to generate a randomized seating chart for her classes. Thsi is still *very* much a work in progress and as of now has minimal styling and has some further refinement to undergo. Feel free to use when making your own seating arrangements.

## How to use

1. Input a student name in the form field and choose a restriction you have for that student. If you want them to be in the front row, check the 'Front Row Only' box. If there is a particular student you wish to not sit next to them, select the 'Neighbor Restriction' box. Once selected a modal will pop up prompting you to input the name of the student you are restricting. 
    * Please note that as they are free text fields they are performing exact comparisons, so as of now spelling and capitalization matter.
Once you have input the name and desired restrictions click the 'Add Student' button. You will see that students name show up in a list to the right. 

<br>

2. At the top you will find a dropdown labeled 'Rows' this is the number of rows int eh class moving from front to back. You may be wondering why I chose rows vs. columns when naming. Because I made this app and I say rows are from front to back. Deal with it

<br>

Example of a class with 4 rows:
>Front of class
>
> X_X_X_X

> X_X_X_X

> X_X_X_X

> X_X_X_X

> X_X_X_X

Example of a class with 7 rows:
>Front of class
>
> X_X_X_X_X_X_X

> X_X_X_X_X_X_X

> X_X_X_X_X_X_X

> X_X_X_X_X_X_X

> X_X_X_X_X_X_X

<br>

3. If for some reason you wish to remove a student or edit the restrictions there is a red trash can symbol next to each student name which will remove them from the list and you can add them again.

<br>

4. Once you are ready to go, click the yellow 'Make Chart!' button to generate a seating chart. The page assumes the top of the page is the front of the class. Depending ont he number of restrictions placed and size of the class you may find some students land next to students you don't want them near. In this case, clicking the 'Make Chart!' button again will generate a new seating arrangement.
