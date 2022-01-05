<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<!-- TODO: Auto-generated template -->
		<html>
			<head>
				<title>Patient Management</title>
			</head>
			<body>
				<h2 style="text-align:center;">Patient Management System</h2>
				<h3 style="text-align:center;">Login</h3>
				<table border="2" align="center">
					<tr>
						<th>login_id</th>
						<th>login_username</th>
						<th>login_password</th>
					</tr>
					<xsl:for-each select="PatientManagement/Login">
						<tr>
							<td>
								<xsl:value-of select="login_id"></xsl:value-of>
							</td>
							<td>
								<xsl:value-of select="login_username"></xsl:value-of>
							</td>
							<td>
								<xsl:value-of select="login_password"></xsl:value-of>
							</td>
						</tr>
					</xsl:for-each>
				</table>
				
				<h3 style="text-align:center;">Admin</h3>
				<table border="2" align="center">
					<tr>
						<th>user_id</th>
						<th>username</th>
						<th>user_contact</th>
						<th>user_address</th>
					</tr>
					<xsl:for-each select="PatientManagement/Admin">
						<tr>
							<td>
								<xsl:value-of select="user_id"></xsl:value-of>
							</td>
							
							<td>
								<xsl:value-of select="username"></xsl:value-of>
							</td>
							<td>
								<xsl:value-of select="user_contact"></xsl:value-of>
							</td>
							<td>
								<xsl:value-of select="user_address"></xsl:value-of>
							</td>
						</tr>
					</xsl:for-each>
				</table>
				
				
				<h3 style="text-align:center;">Patient</h3>
				<table border="2" align="center">
					<tr>
						<th>patient_id</th>
						<th>patient_name</th>
						<th>patient_gender</th>
						<th>registration_date</th>
						<th>type_of_registration</th>
					</tr>
					<xsl:for-each select="PatientManagement/Patient">
					<xsl:sort select="registration_date" order="ascending"></xsl:sort>
						<tr>
						
						<xsl:choose>
							<xsl:when test="patient_id &gt;100000">
								<td bgcolor="#ccccc">
									<xsl:value-of select="patient_id"></xsl:value-of>
								</td>
							
							</xsl:when>
						
						</xsl:choose>
							<td>
								<xsl:value-of select="patient_id"></xsl:value-of>
							</td>
						
							<td>
								<xsl:value-of select="patient_name"></xsl:value-of>
							</td>
							<td>
								<xsl:value-of select="patient_gender"></xsl:value-of>
							</td>
							<td>
								<xsl:value-of select="registration_date"></xsl:value-of>
							</td>
							<td>
								<xsl:value-of select="type_of_registration"></xsl:value-of>
							</td>
						</tr>
					</xsl:for-each>
				</table>
				
				<h3 style="text-align:center;">Medicine</h3>
				<table border="2" align="center">
					<tr>
						<th>drug_id</th>
						<th>drug_name</th>
						<th>drug_dosage</th>
						<th>drug_type</th>
						
					</tr>
					<xsl:for-each select="PatientManagement/Medicine">
					<xsl:if test="drug_id &gt;60">
					
						<tr>
							<td>
								<xsl:value-of select="drug_id"></xsl:value-of>
							</td>
							<td>
								<xsl:value-of select="drug_name"></xsl:value-of>
							</td>
							<td>
								<xsl:value-of select="drug_dosage"></xsl:value-of>
							</td>
							<td>
								<xsl:value-of select="drug_type"></xsl:value-of>
							</td>
						</tr>
						
					</xsl:if>
					
						
					</xsl:for-each>
				</table>
				
				
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>


