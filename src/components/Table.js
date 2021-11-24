import React from 'react'
import { useTable , useGlobalFilter, useAsyncDebounce , useFilters , useSortBy , usePagination} from "react-table";
import "./Table.css"
import Pagination from './Pagination';

function GlobalFilter({
    globalFilter,
    setGlobalFilter,
}) {
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
    }, 200)

    return (
    <span>
        Search :{' '}
        <input
        value={value || ""}
        onChange={e => {
            setValue(e.target.value);
            onChange(e.target.value);
        }}
        placeholder= "input keyword ..."
        className="search__textinput"
        />
    </span>
    )
}

function Table({columns, data}) {
   
    const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page,
        canPreviousPage, canNextPage, pageOptions, pageCount, gotoPage, nextPage,
        previousPage, setPageSize, state, preGlobalFilteredRows, setGlobalFilter} 
    = useTable({ columns, data,
    },
        useFilters, useGlobalFilter, useSortBy, usePagination
    );
    return (

    <>
        <div className="search__report">
        <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
        />
        </div>

        {headerGroups.map((headerGroup) =>
                headerGroup.headers.map((column) =>
                column.Filter ? (
                    <div key={column.id}>
                    <label for={column.id}>{column.render("Header")}: </label>
                    {column.render("Filter")}
                    </div>
                ) : null
                )
            )}

        <table {...getTableProps()} border="1">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}
                  
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? <i class="bi bi-caret-down-fill"></i>
                        : <i class="bi bi-caret-up-fill"></i>
                      : ''}
                  </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>  
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="pagination">
        <button className="btn__pagination" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'First'}
        </button>{' '}
        <button className="btn__pagination" onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button className="btn__pagination" onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button className="btn__pagination" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'Last'}
        </button>{' '}
        <span className="page__of">
          Page{' '}
          <strong>
            {state.pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>

        <div className="select__page">
        <select
          value={state.pageSize}
          onChange={e => {
              setPageSize(Number(e.target.value))
          }}
        >
          {[5, 10, 20].map(pageSize => (
              <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        </div>
      </div>


        <div>
            <pre>
            <code>{JSON.stringify(state, null, 2)}</code>
            </pre>
        </div>
        
        </>
      );
}

export default Table