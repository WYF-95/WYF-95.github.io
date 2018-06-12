<template>
	<div id="log-font">
		<form>
			<table border="0">
				<tr>
					<td style="margin-bottom: 20px;">用户名：</td>
					<td><input type="text" ></td>
				</tr>
				<tr>
					<td>密码：</td>
					<td><input type="password" ></td>
				</tr>
				<tr>
					<td><input type="submit" value="提交"/> </td>
					<td><input type="reset" value="清除"></td>
				</tr>
			</table>
		</form>
	</div>
</template>

<script>
	export default{
		name:'log-font',
	}
</script>

<style>
    td{padding:5px 10px;}
	input[type="submit"],input[type="reset"]{width: 60px;height: 25px;color: white;margin: 0px;padding: 0px;border:none;cursor:pointer;border-radius: 5px;}
    input[type="reset"]{background: red;}
    input[type="submit"]{background: green;}
</style>