import { useAppSelector, useField } from "../hooks";
import { useState } from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TextField from "@mui/material/TextField";
import TableRow from '@mui/material/TableRow';
import { Flag } from "../types";

interface Column {
  id: 'flag' | 'name' | 'region' | 'population' | 'languages';
  label: string;
  minWidth?: number;
  align?: 'right';
  format: (value: any) => JSX.Element;
}

const columns: readonly Column[] = [
  {
    id: 'flag',
    label: 'Flag',
    minWidth: 170,
    format: (value: Flag) => <img src={value.svg} height='100' alt={value.alt}/>
  },
  {
    id: 'name',
    label: 'Name',
    minWidth: 100,
    align: "right",
    format: (value: string) => <span>{value}</span>
  },
  {
    id: 'region',
    label: 'Region',
    minWidth: 170,
    align: 'right',
    format: (value: string) => <span>{value}</span>
  },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value: number) => <span>{value.toString()}</span>
  },
  {
    id: 'languages',
    label: 'Languages',
    minWidth: 170,
    align: 'right',
    format: (value?: string[]) => value ? <>{value.map(l => <span key={l}>{l}<br/></span>)}</> : <></>
  },
];


const CountryList = () => {
  const filter = useField({ type: "text", label: "search" });
  const countries = useAppSelector(state => state.countries);

  const countriesToShow = countries.filter(c => c.name.toLowerCase().includes(filter.value.toLowerCase()));

  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TextField { ...filter } variant="outlined" />
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={countriesToShow.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <TableContainer sx={{ maxHeight: "80vh"}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {countriesToShow
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format(value)}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CountryList;