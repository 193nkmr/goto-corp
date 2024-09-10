import React from "react";
import { Container, Typography, Box, } from "@mui/material";
import { TableContainer, Table, TableRow, TableCell, TableBody, Paper } from "@mui/material";

// テーブルとして表示させる情報の定義
function createData(name, info) {
    return { name, info};
  }

  // テーブル表示情報定義
  const rows = [
    createData('会社名（法人名）', '株式会社てすとかんぱにー。'),
    createData('代表者・役員', '代表太郎, 役員二郎'),
    createData('所在地（住所）', '〒000-0000 東京都テスト区テスト町1-1'),
    createData('電話番号', '03-0000-1111'),
    createData('営業時間', '09:00~18:00'),
    createData('設立', 'yyyy/MM/DD'),
    createData('事業内容', '通信事業'),
    createData('資本金', '1000万円'),
    createData('従業員数', '5人'),
    createData('売上高', '100万円'),
    createData('主要取引先', '取引先１, 取引先２'),
    createData('取引銀行', 'テスト銀行'),
    createData('許可・登録・免許', 'ああああああああ'),
  ];

const AboutUs = () => {
    return (
        <>
            <Container>
                <Box sx={{height: 100, width: "auto" }}></Box>
                <Typography variant="h6">会社概要</Typography>
                <Box sx={{height: 20, width: "auto" }}></Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableBody sx={{ border: 0 }}>
                        {rows.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="left">{row.info}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    )
}

export default AboutUs;