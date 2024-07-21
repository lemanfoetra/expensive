
export async function pengeluaranHariIni(token) {
    const url = 'http://expense.ardynsulaeman.cloud/api/dashboard/jumlah_pengeluaran_hari_ini';
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    if (!response.ok) {
        throw new Error("Gagal memuat data.");
    }
    return await response.json();
}


export async function pengeluaranBulanIni(token) {
    const url = 'http://expense.ardynsulaeman.cloud/api/dashboard/jumlah_pengeluaran_bulan_ini';
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    if (!response.ok) {
        throw new Error("Gagal memuat data.");
    }
    return await response.json();
}