export default (body: string) => {
    return(`
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8" />
                <title>Hello React!</title>
            </head>
            <body>
                <div>${body}</div>
                
                <script src="./bundle.js"></script>
            </body>
        </html>
`)
};
