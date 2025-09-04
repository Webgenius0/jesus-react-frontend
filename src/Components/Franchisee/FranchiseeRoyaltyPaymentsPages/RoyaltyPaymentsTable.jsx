"use client";

import { useEffect, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import EditSVG from "@/Components/Svg/FranchiseeDashboardSVG/EditSVG";
import DeleteSVG from "@/Components/Svg/FranchiseeDashboardSVG/DeleteSVG";
import { Button } from "@/Components/ui/button";
import ReceipSVG from "./../../Svg/FranchiseeDashboardSVG/ReceipSVG";

export default function RoyaltyPaymentsTable() {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });

  useEffect(() => {
    setData([
      {
        id: "1",
        invoiceId: "INV-1001",
        dateIssued: "2025-09-01",
        dueDate: "2025-09-10",
        amount: "$250",
        status: "Unpaid",
        paymentMethod: "Credit Card",
      },
      {
        id: "2",
        invoiceId: "INV-1002",
        dateIssued: "2025-09-02",
        dueDate: "2025-09-12",
        amount: "$450",
        status: "Paid",
        paymentMethod: "PayPal",
      },
      {
        id: "3",
        invoiceId: "INV-1003",
        dateIssued: "2025-09-03",
        dueDate: "2025-09-13",
        amount: "$320",
        status: "Unpaid",
        paymentMethod: "Bank Transfer",
      },
      {
        id: "4",
        invoiceId: "INV-1004",
        dateIssued: "2025-09-04",
        dueDate: "2025-09-14",
        amount: "$150",
        status: "Paid",
        paymentMethod: "Credit Card",
      },
      {
        id: "5",
        invoiceId: "INV-1005",
        dateIssued: "2025-09-05",
        dueDate: "2025-09-15",
        amount: "$150",
        status: "Unpaid",
        paymentMethod: "Cash",
      },
      {
        id: "6",
        invoiceId: "INV-1006",
        dateIssued: "2025-09-06",
        dueDate: "2025-09-16",
        amount: "$150",
        status: "Paid",
        paymentMethod: "Credit Card",
      },
    ]);
  }, []);

  const columns = [
    { accessorKey: "id", header: "ID" },
    {
      accessorKey: "invoiceId",
      header: "Invoice ID",
    },
    { accessorKey: "dateIssued", header: "Date Issued" },
    { accessorKey: "dueDate", header: "Due Issued" },
    { accessorKey: "amount", header: "Amount" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "paymentMethod", header: "Payment method" },
    {
      accessorKey: "receipt",
      header: "Receipt",
      cell: ({ row }) => (
        <div className="flex gap-4">
          <button className="cursor-pointer" size="icon" variant="outline">
            <ReceipSVG />
          </button>
        </div>
      ),
    },
    {
      id: "action",
      header: "Action",
      cell: ({ row }) => (
        <div className="flex gap-4">
          <button className="cursor-pointer bg-PrimaryBg text-white py-2 px-4 rounded-2xl" size="icon" variant="outline">
            Pay now
          </button>
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
      <div className="mb-6 ">
        <h1 className="font-semibold text-xl">Staff Data</h1>
      </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="bg-[#f3f3f3]">
              {headerGroup.headers.map((header, index) => (
                <TableHead
                  key={header.id}
                  className={`text-black font-medium text-lg ${
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
                  <TableCell key={cell.id} className="py-6 text-base">
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
            <SelectTrigger className="w-fit cursor-pointer">
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
            className={"cursor-pointer"}
          >
            {"<"}
          </Button>
          <Button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage?.()}
            className={"cursor-pointer"}
          >
            {">"}
          </Button>
        </div>
      </div>
    </div>
  );
}
