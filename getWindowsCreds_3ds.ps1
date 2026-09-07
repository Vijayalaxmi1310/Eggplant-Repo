$target = "3ds_LoginCreds"

$cred = Get-StoredCredential -Target $target

if ($null -eq $cred) {
    Write-Host "Credential '$target' not found."
    return
}

@"
Username=$($cred.UserName)
Password=$($cred.GetNetworkCredential().Password)
"@ | Set-Content "C:\Users\vijayalaxmi.kummari\Documents\WindowsCredentials\3dscredentials.txt"

Write-Host "Credentials exported successfully."
