import app from './app'
import config from './config'
import '@babel/polyfill'

app.listen(
    app.get('port'), () => { 
        console.log(`\nready - started server on http://localhost:${config.PORT}\n`) 
    }
)