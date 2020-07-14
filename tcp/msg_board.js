var net = require('net')

var server = net.createServer()
var port = 80

var msgs = [
    {
        name: 'sdf',
        content: 'asd',
        timestamp: 1594648796592
    },
    {
        name: 'ert',
        content: 'ers',
        timestamp: 1594648796500
    }
]

server.on('connection', conn => {
    conn.on('data', data => {
        var d = data.toString()

        console.log(d)

        var [header, body] = d.split('\r\n\r\n')
        var [firstLine, ...lines] = header.split('\r\n')
        var [method, path] = firstLine.split(' ')

        if (method === 'POST') {  //POST用来发送消息
            var msg = parseQueryString(body)
            msg.timestamp = Date.now()
            msgs.push(msg)
            
            //用get请求跳回首页
            conn.write('HTTP/1.1 302 Moved Templajfowiehf\r\n')
            conn.write('Location: /\r\n')
            conn.write('\r\n')
            conn.end()
            return
        }

        conn.write('HTTP/1.1 200 OK\r\n')
        conn.write('Content-Type: text/html\r\n')
        conn.write('\r\n')

        conn.write(`
            <meta charset = "UTF-8">
            <form method = "POST" action = "">
                name: <input type = "text" name = "name">
                mesage : <textarea name = "content"></textarea>
                <br>
                <button>Submit</button>   
            </form>
            
            ${
            Array.from(msgs).reverse().map(msg => `
                <div>
                <h3>   ${msg.name} <small>${new Date(msg.timestamp).toString()}</small></h3>
                <p>${msg.content}</p>
                </div>
                `).join('')
            }
        `)
        conn.end()
    })

    conn.on('error', () => { })

})


server.listen(port, () => {
    console.log('listen on port')
})

function parseQueryString(str) {
    return str.split('&').reduce((result, pair) => {
        var [key, val] = pair.split('=')
        result[key] = decodeURIComponent(val)
        return result
    }, {})

}

