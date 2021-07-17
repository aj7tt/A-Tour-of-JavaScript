
## Adding jQuery to Web Page using Google CDN

```
<head>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
```

## Syntax ⚡⚡

**$(selector).action( )**
```
$("p").hide()

$("p").click(function(){
  $(this).hide("slow");
});
```

### 1.What jQuery methods should I be familiar with? 💌

 
jQuery gives us access to tons of different methods to add dynamic behavior to our sites, some methods you’ll see and use often including effects, events, and DOM manipulation:

**effect methods:**
```
.animate()
.delay()
.fadeIn()/.fadeOut()
.hide()/.show()
.toggle()
```
----------------------

**event methods:**
```
.change()
.focus()
.hover()
.click()/.dblclick()
.keydown()/.keyup()/.keypress()
.mouseenter()/.mouseleave()
.on()
.ready()
```
-------------------------

**DOM manipulation methods:**
```
.addClass()/.toggleClass()
.after()/.before()
.append()/.prepend()
.remove()
.val()
```
