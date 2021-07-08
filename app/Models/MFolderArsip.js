'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MFolderArsip extends Model {
    static get table() {
        return "m_folder_arsip";
      }
    
      sekolah() {
        return this.belongsTo("App/Models/MSekolah");
      }
}

module.exports = MFolderArsip
