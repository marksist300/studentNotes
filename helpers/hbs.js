const moment = require('moment')

module.exports = {
    formatDate: function (date, format) {
        return moment(date).format(format)
    },
    truncate: function (str, len){
        if(str.length > len && str.length > 0){
            let newStr = str + ' '
            newStr = str.substr(0, len)
            newStr = str.substr(0, newStr.lastIndexOf(' '))
            newStr = newStr.length > 0 ? newStr : str.substr(0, len)
            return newStr + '...'
        }
        return str
    },
    stripTags: function (input) {
        input = input.replace(/<(?:.|\n)*?>/gm, '')
        input = input.replace(/&#39;/gm, "'");
        input = input.replace(/&quot;/gm, '"');
        input = input.replace(/&nbsp;/gm, ' ');
        input = input.replace(/&amp;/gm, '&');
        input = input.replace(/&pound;/gm, '£')
        input = input.replace(/&euro;/gm, '€')
        return input;
    },
    editIcon: function (notesUser, loggedUser, noteId, floating = true) {
        if (notesUser._id.toString() == loggedUser._id.toString()) {
          if (floating) {
            return `<a href="/notes/edit/${noteId}" class="btn-floating halfway-fab blue"><i class="fas fa-edit fa-small"></i></a>`
          } else {
            return `<a href="/notes/edit/${noteId}"><i class="fas fa-edit"></i></a>`
          }
        } else {
          return ''
        }
    },
    select: function (selected, options) {
        return options
          .fn(this)
          .replace(
            new RegExp(' value="' + selected + '"'),
            '$& selected="selected"'
          )
          .replace(
            new RegExp('>' + selected + '</option>'),
            ' selected="selected"$&'
          )
      }
}