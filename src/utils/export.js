import XLSX from 'xlsx';

const exportExcel = (data) => {
  const ws = XLSX.utils.aoa_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'SheetJS');
  console.log('exports');
};

export default exportExcel;
