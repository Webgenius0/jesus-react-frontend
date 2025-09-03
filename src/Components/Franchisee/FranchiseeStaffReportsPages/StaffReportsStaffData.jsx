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

export default function StaffReportsStaffData() {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });

  useEffect(() => {
    setData([
      {
        id: "1",
        avatar: "https://i.pravatar.cc/150?img=1",
        name: "John Doe",
        role: "Cashier",
        scheduleDay: "Monday",
        scheduledTime: "8 hour",
      },
      {
        id: "2",
        avatar: "https://i.pravatar.cc/150?img=2",
        name: "Sarah Smith",
        role: "Manager",
        scheduleDay: "Tuesday",
        scheduledTime: "12 hour",
      },
      {
        id: "3",
        avatar: "https://i.pravatar.cc/150?img=3",
        name: "Michael Brown",
        role: "Chef",
        scheduleDay: "Wednesday",
        scheduledTime: "6 hour",
      },
      {
        id: "4",
        avatar: "https://i.pravatar.cc/150?img=4",
        name: "Emily Johnson",
        role: "Waiter",
        scheduleDay: "Thursday",
        scheduledTime: "2 hour",
      },
      {
        id: "5",
        avatar: "https://i.pravatar.cc/150?img=4",
        name: "Emily Johnson",
        role: "Waiter",
        scheduleDay: "Thursday",
        scheduledTime: "2 hour",
      },
      {
        id: "6",
        avatar: "https://i.pravatar.cc/150?img=4",
        name: "Emily Johnson",
        role: "Waiter",
        scheduleDay: "Thursday",
        scheduledTime: "2 hour",
      },
    ]);
  }, []);

  const columns = [
    { accessorKey: "id", header: "ID" },
    {
      accessorKey: "name",
      header: "Staff Name",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <img
            src={row.original.avatar}
            className="w-12 h-12 rounded-full object-cover"
            alt=""
          />
          <p>{row.original.name}</p>
        </div>
      ),
    },
    { accessorKey: "role", header: "Role" },
    { accessorKey: "scheduleDay", header: "Shedule Day" },
    { accessorKey: "scheduledTime", header: "Scheduled Time" },
    {
      id: "action",
      header: "Action",
      cell: ({ row }) => (
        <div className="flex gap-4">
          <button className="cursor-pointer" size="icon" variant="outline">
            <EditSVG size={16} />
          </button>
          <button className="cursor-pointer" size="icon" variant="outline">
            <DeleteSVG size={16} />
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
