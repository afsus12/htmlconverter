
    const pdf2html = require('pdf2html')
exports.upload=  async(req, res) => {
    
  
    try {

        pdf2html.html(req.params.path, (err, html) => {
            if (err) {
                console.error('Conversion error: ' + err)
            } else {
                res.send(html)
            }
        })
    } catch (err) {
     console.log(err)
    }



  }