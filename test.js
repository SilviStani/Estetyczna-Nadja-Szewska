console.table(
    {
        'Time Stamps': new Date().getTime(),
        'OS': navigator['platform'],
        'Browser': navigator['webdriver'],
        'Language': navigator['language']
    }
)