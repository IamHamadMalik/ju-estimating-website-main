import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

export function RecentSales() {
  const salesData = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@example.com",
      amount: "+$1,999.00",
      avatarFallback: "OM",
    },
    {
      name: "Jackson Lee",
      email: "jackson.lee@example.com",
      amount: "+$39.00",
      avatarFallback: "JL",
    },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@example.com",
      amount: "+$299.00",
      avatarFallback: "IN",
    },
    {
      name: "William Kim",
      email: "will.kim@example.com",
      amount: "+$99.00",
      avatarFallback: "WK",
    },
    {
      name: "Sofia Davis",
      email: "sofia.davis@example.com",
      amount: "+$39.00",
      avatarFallback: "SD",
    },
  ]

  return (
    <Table>
      <TableBody>
        {salesData.map((sale, index) => (
          <TableRow key={index}>
            <TableCell>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src={`/placeholder-user.jpg?name=${sale.name}`} alt="Avatar" />
                  <AvatarFallback>{sale.avatarFallback}</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">{sale.name}</p>
                  <p className="text-sm text-muted-foreground">{sale.email}</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-right font-medium">{sale.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
