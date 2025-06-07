async function filePrompt(on_file, as="text", accept="*") {
    let file_input = document.createElement("input");
    file_input.type = "file";
    file_input.style.display = "none";

    file_input.click();

    file_input.onchange = () => {
        if (file_input.files.length > 0) {
            var file = file_input.files[0];
            
            var reader = new FileReader();
      
            reader.onload = function(e) {
                on_file(e.target.result);
            };
            
            if (as === "text") {
                reader.readAsText(file);
            } else if (as === "url") {
                reader.readAsDataURL(file);
            } else {
                reader.readAsArrayBuffer(file);
            }
            
        }
    };
}