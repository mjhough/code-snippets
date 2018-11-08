for (let i = 0, row; row = popTable.rows[i]; i++) {
   countryPops[row.cells[1].innerText] = Number(row.cells[2].innerText.replace(/,/g, ''))
}
