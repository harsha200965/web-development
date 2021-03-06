<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!-- External Css -->
    <link rel="stylesheet" href="style.css">
    <!-- Internal Css -->
    <style type="text/css">
        /* All selector  */
        
        * {}
        /* tag based css */
        
        body {}
        /* class(group) based css */
        
        .main {}
        /* id based css */
        
        #h1 {
            color: rgb(255, 255, 255);
            background-color: rgba(78, 212, 78, 0.897);
            border: 2px solid #FFC107;
        }
        
        .heading {
            color: rgb(255, 255, 255);
            background-color: rgba(247, 60, 14, 0.959);
            border: 10px solid #FFC107;
        }
        
        .box {
            width: 500px;
            height: 200px;
            display: inline-block;
            background-color: beige;
            overflow: auto;
            border: 2px solid black;
        }
    </style>
</head>
<!-- Inline -->
<!-- style="background: #253636" -->

<body class="main">
    <h1 id="h1">Test</h1>
    <!-- Code injected by live-server -->
    <h1 class="heading">Test</h1>

    <div class="box">
        <img class="float-right" src="https://www.w3schools.com/css/pineapple.jpg" alt="Pineapple" style="width:170px;height:170px;margin-left:15px;">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla minima quisquam dignissimos saepe, fugit itaque exercitationem? Recusandae natus unde,odit sequi similique, adipisci delectus aperiam, quasi quidem voluptatum voluptatem corporis. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Excepturi, necessitatibus modi? Quidem, illo impedit, facere sunt ut dolores ullam, excepturi necessitatibus obcaecati totam amet! Magni consequatur perspiciatis obcaecati iusto eos? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Id maxime doloremque voluptatum, molestiae exercitationem eveniet molestias nisi architecto iusto quam facilis dignissimos repellat provident repudiandae dolores vitae non consequuntur natus!
        </p>
    </div>
    <div class="box">
        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Points</th>
                <th>Points</th>
                <th>Points</th>
                <th>Points</th>
                <th>Points</th>
                <th>Points</th>
                <th>Points</th>
                <th>Points</th>
                <th>Points</th>
                <th>Points</th>
            </tr>
            <tr>
                <td>Jill</td>
                <td>Smith</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
            </tr>
            <tr>
                <td>Eve</td>
                <td>Jackson</td>
                <td>94</td>
                <td>94</td>
                <td>94</td>
                <td>94</td>
                <td>94</td>
                <td>94</td>
                <td>94</td>
                <td>94</td>
                <td>94</td>
                <td>94</td>
            </tr>
            <tr>
                <td>Adam</td>
                <td>Johnson</td>
                <td>67</td>
                <td>67</td>
                <td>67</td>
                <td>67</td>
                <td>67</td>
                <td>67</td>
                <td>67</td>
                <td>67</td>
                <td>67</td>
                <td>67</td>
            </tr>
        </table>
    </div>
</body>

</html>