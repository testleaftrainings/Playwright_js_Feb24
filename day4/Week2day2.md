Agenda:
------
2.30PM to 3.30PM: CSS Selectors/xpath
3.30PM to 4.00PM: Playwright Selectors
4.00PM to 4.15PM: Classroom Activity-1
4.15PM to 4.25PM: Break
4.25PM to 5.00PM: Handling DropDown
5.00PM to 5.20PM: Classroom Activity-3
5.20PM to 6.30PM: Assertions


attributes of element
  id
  name
  class
  link --><a>black color text -->linktext
  text -->black color
  role
  placeholder
  data-id..
  type
 // size
  

CSS Selectors
-------------
using id attribute
    #idvalue
    [id='value']  -->using attribute
 page.locator("[id='username']")
using class attribute
   .classValue

using attribute and tagname
sytax:
tagname[attribute='value']
input[id='username']
input[class='inputLogin'][id='username']

text based selector
text=Value

Parent -Child
div[id='label'] a 
div[id='label']>a 

<div> class=grandParent
  <div> class='parent1'
    <div> class='child'
    <span></span>  -sibling
    <a> </a>  -sibling
    </div>
  </div>

  <div> class='parent2'
    <div> class='child'
    <span></span>  -sibling
    <a> </a>  -sibling
    </div>
  </div>
 </div>

 -sibling
   immediate -sibling
   any sibling attribute + tagname
   p[class='top']+p

-all sibling
p[class='top']~p 

 Parent to child
 div[id='label'] a:nth-child(3)

div[id='label'] a:first-child()

  nth(index) -->pick one particular element index from multiple occurence
            --Starting with zero
  first();
  last() ; 
  filter();
  locator(p[class='top']~p ).filter({})
           {hasText:Password}
 
partial match
------------
prefix,suffix,substring(contains)

tagname[class^='input']
tagname[class$='Login']
tagname[class*='put']


------------------------------

xpath --xml path -->address of the element
 Basic

//tagname[@attribute='attributeValue'];

textbased
 //tagname[text()='textValue']

 multiple occurences 
 (any basic xpath)[index]  -starts with 1

 (//input[class='inputLogin'])[2]

 Partial match
 //tagname[contains(@arrtibute,'attributeValue')]
 //tagname[contains(text(),'balcktext value')]


Classroom:1
Launch browser
load the url
Enter the credentials -as demoSalesManager crmsfa
Click on Login
Click on crmsfa
Click on Leads
Click on CreateLead
Enter Company name 
Enter First name
Enter last name
Click Create Lead button
Print the page title

parent to child  /child to parent 
grandparent to grandChild /viceversa

//if sibling type  -->elder to younger /younger-elder


(basic xpath)/child tagname
child to parent
child xpath/parent::tagname parent

grandParent to grandChild
grandParent xpath//grandchild tagname
grandChild to grandParent

(Attributebased xpath of grandchild)/ancestor::grandparent tagname
//label[text()='Password']/ancestor::div

elder xpath /following-sibling::tagname if targeted sibling
younger xpath/preceding-sibling::tagname of targeted elder sibling

elder cousin xpath/following::tagname of young
yunger cusin xpath/preceding ::tagname of elder


playwright Selectors
-------------------
getByRole -->button,link,checkbox
getByLabel->attributes /<label>
getByText-->using black text
getByPlaceholder ->attribute



Dropdown 
        --><select>
             --><option>

             page.selectoption("",{})

option -->of value attribute
         -->index
         -->text
label
index
value


Nondropdown
 <div>
 <span>
   as like normal element
    inspect the dropdown -->use click() -->inspect the values -->click()