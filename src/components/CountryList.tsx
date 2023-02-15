import { useAppSelector } from "../hooks";
import { useState } from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Flag, Name, Region } from "../types";
import { Link } from "react-router-dom";

interface Column {
  id: 'flag' | 'name' | 'region' | 'population' | 'languages';
  label: string;
  minWidth?: number;
  align?: 'right';
  // eslint-disable-next-line
  format?: (value: any) => JSX.Element | null;
}

const columns: readonly Column[] = [
  {
    id: 'flag',
    label: 'Flag',
    minWidth: 130,
    format: (value: Flag) => <img src={value.svg} height='100' alt={value.alt}/>
  },
  {
    id: 'name',
    label: 'Name',
    minWidth: 80,
    align: "right",
    format: (value: Name) => <>{value.common}</>
  },
  {
    id: 'region',
    label: 'Region',
    minWidth: 130,
    align: 'right',
    format: (value: Region) => <>{value.region}</>
  },
  {
    id: 'population',
    label: 'Population',
    minWidth: 130,
    align: 'right',
  },
  {
    id: 'languages',
    label: 'Languages',
    minWidth: 130,
    align: 'right',
    format: (value?: string[]) => value ? <>{value.map(l => <span key={l}>{l}<br/></span>)}</> : null
  }
];


const CountryList = ({ filter }: { filter: string }) => {
  const countries = useAppSelector(state => state.countries);

  const countriesToShow = countries.filter(c => c.name.common.toLowerCase().includes(filter.toLowerCase()));

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
              <TableCell/>
            </TableRow>
          </TableHead>
          <TableBody>
            {countriesToShow
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name.common}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format ? column.format(value) : <>{value}</>}
                        </TableCell>
                      );
                    })}
                    <TableCell>
                      <Link to={`/${row.name.common}`}><ArrowForwardIosIcon/></Link>
                    </TableCell>
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