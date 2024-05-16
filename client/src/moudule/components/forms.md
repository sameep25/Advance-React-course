### File Input

 - always uncontrolled

```
const Form = () =>{
    const fileInput = useRef(null) ;

    const handleSubmit = (e) =>{
        e.preventDefault() ;
        const file = fileInput.current.files ;
    }

    return(
        <form onSubmit = {handleSubmit}>
            <input ref={fileInput} type="file" />
        </form>
    );
};


```
