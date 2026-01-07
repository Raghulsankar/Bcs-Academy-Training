# gap

gap() is used in center of the elemnts

# wrap

flex-wrap is used for move the items below.

# flex direction

main(access) - column direction

cross (access) - row direction

[flex game](https://preview.webflow.com/preview/flexbox-game?preview=d1a26b027c4803817087a91c651e321f&m=1)

# align-self

= align-self is used to which ever you want a single property move this align self

- align self is used only in the "cross access"

# align-content

- align content use punch of everything move to cross access

- align content using only ' wrap ' is available

# flex-grow & flex-shrink

## flex-grow

- remaining space are equally distributed using 'flex-grow'

# flex-shrink

- remining space equally reduce

- remining space is not important fo r shrink

- flex-shrink default property value is 1.

> total width <= main container while shrink works

# text-decoration and list-style

text-decoration : none;
list0style: none;

> ol and ul is only html elements is default value like 40px.

# css nesting

refer mdn

header{ >h2{

    }

}

# specificity

// specificity order

> specificity selector(1,1,1,0,0)

> - ! important > inline style > Id selector> class selector > element selector

# what is specificity?

- when is clash of style then which one does Css pick specificity

# specificity order

> - ! important > inline style > Id selector> class selector > element selector

# clip path

[clippath](https://bennettfeely.com/clippy/)

this is used for decoration purpost like profolio is best

# shadow

> box-shadow

> text-shadow

[boxshadow](https://getcssscan.com/css-box-shadow-examples)

box shadow not apply image only use containers like div, section .

# box-sizing

box-sizing : border-box;

- box sizing used for remove the values of padding and border.

# universal selector

> - star(\*) will called "Universal selector"

# grid

- grid understand 2D.
- grid will do that check row and column

> fractional unit - 1:1

grid-template-columns: 1fr 1fr;

grid-template-columns: 1fr 1fr 1fr;

grid-template-columns: 1fr 2fr 1fr;

grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

grid-template-columns : repeat(12, 1fr);

> in Grid Gap method is use row-gap , column-gap

grid also have justify-content , align-items also works.
