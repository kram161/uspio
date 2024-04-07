document.addEventListener('DOMContentLoaded', () => {
    const sendEamil = async () => {
        let email = 'test'
        let response = await fetch('send-email/email.php').then((res) => {
            res.text().then((response) => {
                console.log(response)
            })
        })
    }
    sendEamil()
})