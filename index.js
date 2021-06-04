
async function saveAndGetText() {
    let text = {}
    for(let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i).match(/plugin-copy-[0-9]/)) {
            if(!text[localStorage.key(i)] || localStorage.getItem(localStorage.key(i).length === 0)) {
                text = {
                    ...text,
                    [localStorage.key(i)]: localStorage.getItem(localStorage.key(i))  
                }
            }
        }
    }
    let string = Object.values(text).join('\n\n')
    await navigator.clipboard.writeText(string)
}

function deleteTexts() {
    for(let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i).match(/plugin-copy-[0-9]/)) {
            localStorage.removeItem(localStorage.key(i))
        }
    }
}

async function getText(id) {
    let text = {}
    for(let i = 0; i < localStorage.length; i++) {
        if(i == id && localStorage.key(i).match(/plugin-copy-[0-9]/)) {
            if(!text[localStorage.key(i)] || localStorage.getItem(localStorage.key(i).length === 0)) {
                text = {
                    ...text,
                    [localStorage.key(i)]: localStorage.getItem(localStorage.key(i))  
                }
            }
        }
    }
    let string = Object.values(text).join('\n\n')
    await navigator.clipboard.writeText(string)
}

document.addEventListener('keydown', event => {
    if(event.key === 'c' || event.key === 'C') {
        document.addEventListener('keydown', async ev => {
            if(Number(ev.key) + 1) {
                localStorage.setItem(`plugin-copy-${ev.key}`, window.getSelection())
            }

            // Delete all the text saved
            if(ev.key === 'd' || ev.key === 'D') {
                deleteTexts()
            }


            if(ev.key.toLocaleLowerCase() === 'a') {
                return saveAndGetText()
            }



            // Saving the text into the local storage
            return saveAndGetText()
        })
    }

})

