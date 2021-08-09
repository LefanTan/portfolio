export const directToPage = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export const getFile = (fileName: string, type: string) => {
    const file = require(`../assets/${type}s/${fileName}`)

    if (typeof (file) === 'undefined') {
        throw Error('File not found')
    }
    return file['default']
}

