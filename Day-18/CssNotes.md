# Responsive Design

# media querys

- desktop design #Over Riding"the design using media query
- @media is the key word

> highest specificity will win

> media quert write order prefectly 

> mobile size < tablet size < laptop size


# Pseudo selector

pseudo class selector - :   =>  use single colan

pseduo element selector - ::  =>  use doubloe colans


# first and nth element selection


first-child  =>  :first-child  =>  get the first element


nth-child  =>  :nth-child(2)  => second elemnet will be selected


# odd elements selection

odd elements selection =>  :nth-child(odd)

# even elements selection

even elements selection => :nth-child(Even)


n+3 =  n(0)+3 = 3 ==> start 3rd element will be selected    



> 3n+4 => 3n means 3(0)+4 = 4 so 4th element seleted afterthat 8 element selected after that 12 elemennt selected.


-n + 1 means get the reversly selected elements


> refer mdn using learn pseduo selectors nth child


# Pseudo class seletcors is given below

# first-child

# last-child

# nth-child

# first-of-type

# last-of-type

# nth-of-type


<!-- 
nth-child => 
nth-of-type =>   whats the different? -->


# hover

> hover => hover means the curser go the target the condition works


example

.box:hover{
    background: teal;
}


# active

> active => if you want click then active will be shown


example

.box:active{
    backgroumd: yellow;
}



# transform


> transform => the tranform use that helps to  transform when you assign scale(1.) >  bigger  increase the object.

> transform => the tranform use that helps to  transform when you assign scale(0.9.) < small reduce the object.


example

.box{
    height: 100px;
    aspect-ratio: 1/1;
    background: red;

}


# transistion

> transistion using for animation 


example

.box{
    height: 100px;
    aspect-ratio: 1/1;
    background: red;
    transistion : 0.2s transform;

}


# translate

translateY ->  top and bottam move the obhject    using + for bottom move using - for top move the object

translateX ->  right and left move on object     using + for right move using - for left move the object



# rotate


# ease-in 
# ease-in-out  
# ease


transform : 5s all ease-in-out;


> refer josh comeau  website to learn animation


[easing wizard](https://easingwizard.com/)  


> read mdn in transform property for more referenece



# Css inheritance

> padding, margin, background, height,width are not inheritance 


> <a> tag is not inheritance



> if these properties woring means call the property afterthat value should be inherit.

<!-- example -->

padding: inherit;

margin: inherit;

background: inherit;





