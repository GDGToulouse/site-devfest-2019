#!/bin/bash
name=`echo $1 | sed 's/\.fr\./\.ru\./'`
mv "$1" "$name"
