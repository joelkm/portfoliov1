# my-portfolio.io
 My portfolio website
THIS DOCUMENT HAS INFORMATIVE PURPOSES ONLY
 
 Intro:

 The main idea is to build a simple portfolio website. The initial plan is to
 work with HTML, CSS, JavaScript,Bootstrap (for some aesthetic purposes,
 may not be used in the end) and jQuery (for DOM manipulation mainly).


 //Commit log://

 --> 1st Commit
 Uploaded some content previously done on my computer. Mainly HTML and CSS.

 -Colors, sizes, margins and fonts

 -Navigation:
    problem: href to every section doesn't get the desired view through navigation.
    solution: some invisible divs in the desire positions and link the href to their ids.
    //don't really like it, may change it later


 --> 2nd Commit
 Created JS file and worked on some features.

 -Navigation: Removed landmark system (1st commit divs) and worked on some js code to trigger on click.
    explanation: scrollIntoView method has very fewoptions for view personazation so
    I got my desired view landmark working with offSet property then used scrollTo.
    The usage of the data atribute makes it easy to reuse the function without rewriting code.

 -Cursor and Pointer: Designed a custom cursor and pointer and used them on divs. Replaced the original one
 with cursor:none, position:absolute on divs and mouse coordinates. The idea is to toggle between them
 (mouseover and mouseout the clickable elements)
    issue: The cursor works fine but it gets driven away if there is no mouse movement
    while scrolling the page. Can't apply setTimeOut so no idea on how to reuse the
    function without mouse movement
    issue: The pointer won't substitute the cursor on mouseover. I need to select the clickables trough an array and I haven't been able to
    correctly apply the event in every single element

 -Content animations: Still figuring out how to properly do some header and content slides triggered by scroll to certain point.
