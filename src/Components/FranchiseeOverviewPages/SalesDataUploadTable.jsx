"use client";

import { useEffect, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Edit, Trash2, Download } from "lucide-react";

export default function SalesDataTable() {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });

  useEffect(() => {
    setData([
      {
        id: "1",
        date: "2025-09-02",
        dailySales: 120,
        totalProductSale: 15,
        fileName: "sales-sep-02.xlsx",
      },
      {
        id: "2",
        date: "2025-09-01",
        dailySales: 90,
        totalProductSale: 10,
        fileName: "sales-sep-01.xlsx",
      },
      {
        id: "3",
        date: "2025-09-08",
        dailySales: 290,
        totalProductSale: 90,
        fileName: "sales-sep-01.xlsx",
      },
      {
        id: "4",
        date: "2025-09-05",
        dailySales: 190,
        totalProductSale: 50,
        fileName: "sales-sep-01.xlsx",
      },
      {
        id: "5",
        date: "2025-09-06",
        dailySales: 210,
        totalProductSale: 70,
        fileName: "sales-sep-06.xlsx",
      },
      {
        id: "6",
        date: "2025-09-07",
        dailySales: 150,
        totalProductSale: 30,
        fileName: "sales-sep-07.xlsx",
      },
    ]);
  }, []);

  const columns = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "date", header: "Date" },
    { accessorKey: "dailySales", header: "Daily Sales" },
    { accessorKey: "totalProductSale", header: "Total Product Sale" },
    { accessorKey: "fileName", header: "Upload File" },
    {
      id: "action",
      header: "Action",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <Button size="icon" variant="outline">
            <Edit size={16} />
          </Button>
          <Button size="icon" variant="outline">
            <Trash2 size={16} />
          </Button>
          <Button size="icon" variant="outline">
            <Download size={16} />
          </Button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: { pagination },
  });

  return (
    <div className="bg-background overflow-hidden rounded-md p-6">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-bold text-xl">Sales Data Upload</h1>
        <button className="bg-black text-white py-2 px-4 rounded-md cursor-pointer">
          Add Sales Data
        </button>
      </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="bg-[#f3f3f3]">
              {headerGroup.headers.map((header, index) => (
                <TableHead
                  key={header.id}
                  className={`text-black font-medium ${
                    index === 0 ? "rounded-tl-sm" : ""
                  } ${
                    index === headerGroup.headers.length - 1
                      ? "rounded-tr-sm"
                      : ""
                  }`}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} className="py-6">
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="py-6 text-lg">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center">
                No data
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="mt-4 flex items-center gap-6">
        <div className="flex items-center gap-3">
          <span>Rows per page:</span>
          <Select
            value={pagination.pageSize.toString()}
            onValueChange={(value) => table.setPageSize(Number(value))}
          >
            <SelectTrigger className="w-fit">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[5, 10, 25, 50].map((size) => (
                <SelectItem key={size} value={size.toString()}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="text-sm">
          {pagination.pageIndex * pagination.pageSize + 1}-
          {Math.min(
            (pagination.pageIndex + 1) * pagination.pageSize,
            data.length
          )}{" "}
          of {data.length}
        </div>

        <div className="flex gap-2">
          <Button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage?.()}
          >
            {"<"}
          </Button>
          <Button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage?.()}
          >
            {">"}
          </Button>
        </div>
      </div>
    </div>
  );
}
