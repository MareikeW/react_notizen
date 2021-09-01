Was sind Compound Components?

--> Compound Components sind Komponenten, die zusammen ein komplettes UI bilden.
--> Wie in HTML <select> und mehrere <option>-Elemente oder <ul> und <li> oder <table> und <th>, <td>


Beispiel mit React.Children.map und React.clone:
Here's a simple example of using React.Children.map and React.cloneElement:

function Foo({children}) {
  return React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      id: `i-am-child-${index}`,
    })
  })
}

function Bar() {
  return (
    <Foo>
      <div>I will have id "i-am-child-0"</div>
      <div>I will have id "i-am-child-1"</div>
      <div>I will have id "i-am-child-2"</div>
    </Foo>
  )
}


Was ist der Unterschied zwischen DOM Component und Composite Component?
1. Eine DOM Komponente ist eine built-in Komponente wie <div />, <span /> oder <blink />.
2. Eine Composite Komponente ist eine benutzerdefinierte (custom) Komponente wie <Toggle /> oder <App />
