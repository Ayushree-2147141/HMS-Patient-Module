<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
            <style>
            * {box-sizing: border-box;}

body { 
  margin: 0;
  
}

.header {
  padding: 10px 10px;
}

.header a {
  float: left;
  color: black;
  text-decoration: none;
  text-align: center;
  padding: 12px;
  font-size: 20px; 
  line-height: 25px;
  border-radius: 4px;
}


table {
  
  border-spacing: 0;
  width: 100%;
  border: 1px solid red;
}

th, td {
  text-align: left;
  padding: 8px;
}





</style>

<div>
  <h1 style="align:center">Employee Details</h1>
  <p>
  <table style="overflow-x:auto;">
  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>SALARY</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                    <th>DESIGNATION</th>
                    <th>PROMOTION</th>
                </tr>
                <xsl:for-each select="Company/Employee">
                    <tr>
                        <td><xsl:value-of select="@id"/></td>
                        <td><xsl:value-of select="Emp-name"/></td>
                        <td><xsl:value-of select="Emp-age"/></td>
                        <td><xsl:value-of select="Emp-salary"/></td>
                        <td><xsl:value-of select="Emp-emailid"/></td>
                        <td><xsl:value-of select="Emp-phonenum"/></td>
                        <td><xsl:value-of select="Emp-designation"/></td>
                        <xsl:if test="Emp-age &gt; 50">
                            <td>Associate Project Manager</td>
                        </xsl:if>
                        <xsl:if test="Emp-age &gt; 41">
                            <td>Team Leader</td>
                        </xsl:if>
                        <xsl:if test="Emp-age &lt; 40">
                            <td>Developer</td>
                        </xsl:if>
                    </tr>
                                    </xsl:for-each>

  </table>
  </p>
</div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>




