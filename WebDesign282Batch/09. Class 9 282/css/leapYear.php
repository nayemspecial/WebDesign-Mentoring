<?php


$year = 2024;

if ( $year % 100 ==0 ) {
    if ( $year % 400 == 0 ) {
        echo "{$year} is a leap year";
    }else
        echo "{$year} is not leap year";
}else
    if( $year % 4 ==0 ) {
        echo "{$year} is a leap year";
    }else
     echo "{$year} is not leap year";





