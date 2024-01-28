import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material";
import { Props } from "../types";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const StyledTableHead = styled(TableHead)(() => ({
  background: "#000",
  borderTop: "1px solid black",
}));

const StyledPaper = styled(Paper)(() => ({
  width: "100%",
  overflow: "hidden",
  marginTop: 5,
}));

const CurrencyDataTable: React.FC<Props> = ({ columns, data }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <StyledPaper>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table aria-label="sticky table">
          <StyledTableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align="center"
                  style={{ minWidth: column.minWidth, color: "whitesmoke" }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, index) => (
                <StyledTableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={`${item.id}-${index}`}
                >
                  {columns.map((column) => (
                    <TableCell key={column.id} align="center">
                      {item[column.id] !== undefined && item[column.id] !== null
                        ? typeof item[column.id] === "number"
                          ? item[column.id].toLocaleString()
                          : item[column.id]
                        : "-"}
                    </TableCell>
                  ))}
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </StyledPaper>
  );
};

export default CurrencyDataTable;
