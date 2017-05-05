#!/usr/bin/perl
use DBI;
use strict;
my $driver   = "SQLite";
my $database = "new_table_data";
my $dsn = "DBI:$driver:dbname=$database";
my $dbh = DBI->connect($dsn, { RaiseError => 1 })
or die $DBI::errstr;
my $sth = $dbh -> prepare('SELECT * FROM new_table;');
   $sth->execute();
   while (my @row = $sth->fetchrow_array) {
      print "first_name: $row[1]  last_name: $row[2] home: $row[3]\n";
   }
$dbh->disconnect();
