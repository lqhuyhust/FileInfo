-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 10, 2020 at 05:09 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `file-info`
--

-- --------------------------------------------------------

--
-- Table structure for table `file`
--

DROP TABLE IF EXISTS `file`;

CREATE TABLE `file` (
  `id` int(11) NOT NULL,
  `name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `file`
--

INSERT INTO `file` (`id`, `name`) VALUES
(1, '.^^^'),
(2, '._doc'),
(3, '._docx'),
(4, '._eml'),
(5, '._xlsx'),
(6, '.003'),
(7, '.0xe'),
(8, '.a'),
(9, '.a00'),
(10, '.a01'),
(11, '.a2c'),
(12, '.abk'),
(13, '.apk');

-- --------------------------------------------------------

--
-- Table structure for table `file_type`
--
DROP TABLE IF EXISTS `file_type`;

CREATE TABLE `file_type` (
  `id` int(11) NOT NULL,
  `file_id` int(11) NOT NULL,
  `soft_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `icon` varchar(100) NOT NULL,
  `developer` varchar(255) NOT NULL,
  `star` numeric(2,1) NOT NULL,
  `vote` int(10) NOT NULL,
  `vote_res` numeric(12,1) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `format` varchar(50) NOT NULL,
  `info` text NULL,
  `more_info` text NULL,
  `how_open` text NULL,
  `updated` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `file_type`
--

INSERT INTO `file_type` (`id`, `file_id`, `soft_id`, `name`, `icon`, `developer`, `star`, `vote`, `vote_res`, `cat_id`, `format`, `info`, `more_info`, `how_open`, `updated`) VALUES
(1,	1, 1, 'Pervasive.SQL Database File', 'default.png', 'Pervasive Software', 2.5, 10, 25, 14, 'N/A', 'Database file used by Pervasive.SQL database software; based on the Btrieve transactional database format; created by the database engine when the database is placed in Continuous Operations mode.', 'The Pervasive.SQL program was renamed Pervasive PSQL starting with version 9.', '', 'Updated December 30, 2009'),
(2, 2, 1, 'Renamed Microsoft Word Document', 'default.png', 'N/A', 2.8, 17, 47.6, 1, 'Binary', 'A _DOC file is a Microsoft Word document with the .doc extension changed to ._doc. It is a .DOC file, which may include formatted text, images, graphs, tables, and charts. _DOC files may be renamed to "._doc" files by an email program to prevent the file from being blocked by an email service.', 'Another reason why a _DOC file may be created by an email program, such as Windows Live Mail, is if the filename ends with a "." before the "." in the extension. For example, the email program changes sample..doc to sample._doc. This also commonly occurs with .DOCX, .XLS, and .XLSX files. You can rename _DOC files by changing the "._doc" extension to ".doc". After renaming the file, you can open it as a standard DOC file. Some programs that can open DOC files are Microsoft Word, Corel WordPerfect, LibreOffice Writer, and Apple Pages.', '', 'Updated June 4, 2018'),
(3, 3, 1, 'Renamed Microsoft Word Document', 'default.png', 'N/A', 3.5, 23, 80.5, 1, 'Zip', 'A _DOCX file is a Microsoft Word document with the .docx extension changed to ._docx. It is a .DOCX file, which includes formatted text, images, graphs, tables, and charts. _DOCX files may be renamed to ._docx files by an email program to prevent the file from being blocked by an email service.', 'Another reason why a _DOCX file may be created by an email program, such as Windows Live Mail, is if the filename ends with a "." before the "." in the extension. For example, the email program changes sample..docx to sample._docx. This also commonly occurs with .DOC, .XLS, and .XLSX files. Users may create DOCX files with various word processors, including Microsoft Word, Apache OpenOffice Writer, or Apple Pages. The files may store different types of documents, such as letters, reports, resumes, invitations, newsletters, business proposals.', 'You can open _DOCX files with the same applications that support DOCX files. However, you may need to rename the _DOCX files by changing the ._docx extension to .docx. After renaming the file, you can open it with Microsoft Word in Windows and macOS. The software is also available for Android and iOS devices.Some other programs that can open _DOCX files include Apache OpenOffice Writer (multiplatform), Kingsoft Writer (multiplatform), and Apple Pages (Mac and iOS). If you are a Mac user simply looking to view a _DOCX file, you can use Apple Preview, which comes bundled with macOS. You can also upload _DOCX files to the Google Docs web application (also available as a mobile app). The application enables you to view, edit, save, and convert the document.', 'Updated January 27, 2021'),
(4, 4, 1, 'Windows Live Mail Email File', 'default.png', 'Microsoft', 3.9, 9, 35.1, 27, 'N/A', 'Email file created by Windows Live Mail (WLM) when a user drags one or more email messages to the desktop; stores the email message data, but cannot be opened directly by WLM until the user changes the extension to .EML.', '', '', 'Updated May 26, 2011'),
(5, 5, 2, 'Renamed Microsoft Excel Spreadsheet', 'default.png', 'N/A', 3.1, 13, 40.3, 5, 'Zip', 'An _XLSX file is a Microsoft Excel spreadsheet that has had its extension changed from .XLSX to ._xlsx. A user or program may have changed the file extension on purpose or by accident. _XLSX files can be opened in Microsoft Excel and other spreadsheet programs after you rename them to use the .xlsx extension.', '_XLSX files are almost always renamed XLSX files. Most commonly, email programs such as Windows Live Mail mistakenly produce _XLSX files. This happens when a user attaches a spreadsheet whose filename ends in . to an email. For example, if you attach a spreadsheet named spreadsheet..xlsx to an email, Windows Live Mail will rename that file to spreadsheet._xlsx. This issue also occurs when users attach .DOC, .DOCX, and .XLS files to emails. While XLSX, and thus _XLSX, files are typically created by Microsoft Excel, they can also be created using other spreadsheet programs, such as OpenOffice Calc or Apple Numbers. After renaming your _XLSX file to use the .xlsx extension, you should be able to open the file in any of those programs.', 'After renaming your _XLSX file to use the .xlsx extension, you can open it in any program that opens XLSX files. These include: Micrsoft Excel (Windows, Mac, Android, iOS) Apple Numbers (Mac) OpenOffice Calc (cross-platform) Google Sheets (web, iOS, Android, Chrome OS)', 'Updated January 29, 2021'),
(6, 6, 2, 'Split Archive Part 3 File', '003-9513.png', 'N/A', 4, 27, 108, 25, 'Binary', 'A 003 file is the third part of a split archive created by a file splitter and combiner program, such as 7-Zip or Incredible Bee Archiver. It contains the data sequentially following the data stored in a .001 and .002 file. 003 files may also have corresponding files with the extensions .004, .005, etc. depending on the file size.', 'Split archive files allow users to break up a file that is large in size to several smaller files. This is useful when emailing large files that exceed the size limit for message attachments. Examples of file splitting and combining utilities that create and open split archives include Smith Micro StuffIt Deluxe, 7-Zip, and Incredible Bee Archiver. Since various programs may create .001, .002, 003, etc. files, the files may be saved in different formats. This means that even though a program creates an 003 file, it does not mean that another program that also creates 003 files will be able to open it. Therefore, be sure to check the software that originally created the file to know which program will open the file.', '', 'Updated December 20, 2019'),
(7, 7, 2, 'F-Secure Renamed Virus File', 'default.png', 'F-Secure', 4.2, 317, 1331.4, 7, 'Binary', 'Virus file detected by F-Secure, an antivirus program; stores a renamed .EXE file that has a virus which could not be disinfected; renamed from an EXE file to an OXE file so that a virus will not execute when double-clicking it in Windows.', 'F-Secure renames infected files if they cannot be disinfected. It replaces the first character of the original file extension with a 0-9. For example, if there are two infected EXE files, you may see a ".0xe" file and a ".1xe" file. F-Secure antivirus software is available in Anti-Virus and Internet Security editions. NOTE: Do not open OXE files since they contain malicious executable code. Instead, select the Delete action the next time they are detected during an F-Secure scan.', '', 'Updated March 2, 2010'),
(8, 8, 2, 'Static Library', 'a-1185.png', 'N/A', 3.2, 79, 252.8, 13, 'Text', 'An A file contains a library of functions and headers that may be referenced by a C/C++ source file. It may store only a few functions or may include an entire library of functions, such as a 3D modeling engine. A files are typically created by the GNU ar utility.', 'A static libraries are more common in Unix-like systems than in Windows systems. In Windows, static libraies typically use the ".lib" extension instead of the ".a" extension. NOTE: Using static libraries may result in larger program files, but enables faster loading times compared to dynamic libraries.', '', 'Updated February 22, 2018'),
(9, 9, 2, 'ALZip Second Split Archive File', 'default.png', 'ESTsoft', 3.4, 21, 71.4, 4, 'N/A', 'Second file of a spanned archive created with ALZip, a multi-format file compression utility; saved in the compressed ALZ format along with an .ALZ file and other split archives; additional files have file extensions .A01, .A02, etc.', 'NOTE: All files in the spanned archive must be available in order for the original file archive to be reassembled.', '', 'Updated August 31, 2009'),
(10, 10, 3, 'ALZip Third Split Archive File', 'a01-3816.png', 'ESTsoft', 3.7, 12, 44.4, 4, 'N/A', 'Third file of a spanned archive created with ALZip, a file compression utility for Windows systems; uses proprietary ALZ compression and is saved along with other split archives; preceded by the .ALZ and .A00 files and is followed by the .A02 file.', 'NOTE: All files that make up the spanned archive must be available in order for the original file archive to be reassembled.', '', 'Updated August 31, 2009'),
(11, 11, 3, 'Alice Object File', 'default.png', 'Carnegie Mellon University', 3.7, 7, 25.9, 11, 'Binary', '3D model used by Alice, a 3D programming environment designed for educational purposes; saved in a compressed 3D mesh format can include vertices, edges, and polygons; may be viewed and edited as a three-dimensional object within Alice.', 'Alice can import several 3D file formats, including .DWG, .DXF, .ASE, and .AI files. However, these files must be converted to the A2C format in order to be edited with Alice.', '', 'Updated August 29, 2011'),
(12, 12, 3, 'Automatic Backup File', 'default.png', 'N/A', 4.3, 53, 227.9, 25, 'Binary', 'Backup file created by various programs, including CorelDRAW, Ability Office Write, and PrintMaster Gold; contains a backup of the a currently opened document or project; used to recover program data in the event of a computer crash or file corruption', 'NOTE: ABK files typically are not meant to be opened directly. Typically, the program that created them will guide users in the process of recovering any lost data.', '', 'Updated March 22, 2010'),
(13, 12, 3, 'Need for Speed Underground Audio File', 'default.png', 'Electronic Arts', 4.1, 18, 73.8, 15, 'Binary', 'Audio File used by Need for Speed Underground (NFSU), a car racing game; contains game speech, music, and other sound files; used to play sound effects and music during gameplay.', '','', 'Updated March 22, 2010'),
(14, 12, 1, 'Arena Opening Book File', 'default.png', 'Martin Blume', 4.3, 12, 51.6, 15, 'Binary', 'File used by Arena, a freeware graphical user interface used by chess engines; contains "opening book" moves, which store opening strategies for an artificial intelligence player; may contain millions of predefined moves.', 'ABK files are used to reduce the computational expense of determining optimal strategies for the first several moves of a chess game.', '', 'Updated March 22, 2010'),
(15, 13, 2, 'Android Package File', 'default.png', 'Google', 4.3,103368, 444482.4, 7, 'Zip', 'An APK file is an app created for Android, Google mobile operating system. Some apps come pre-installed on Android devices, while other apps can be downloaded from Google Play. Apps downloaded from Google Play are automatically installed on your device, while those downloaded from other sources must be installed manually.', 'Typically, users never see APK files because Android handles app installation in the background via Google Play or another app distribution platform. However, there are many websites that offer direct APK file downloads for Android users who want to install apps manually themselves. In this case, you should be careful that you trust the source of the APK file, because malware can be distributed in APK files, just as it can in the case of Windows and .EXE files.', '', 'Updated December 4, 2020');
-- --------------------------------------------------------

--
-- Table structure for table `category`
--
DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NULL 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--
INSERT INTO `category` (`id`, `name`, `description`) VALUES 
(1, 'Text Files', 'Text files contain textual data and may be saved in plain text or rich text formats. While most text files are documents created and saved by users, they can also be used by software developers to store program data. Examples of text files include word processing documents, log files, and saved email messages.'),
(2, 'Audio Files', 'The Audio Files category includes compressed and uncompressed audio formats, which contain waveform data that can be played with audio playback software. This category also includes MIDI files, musical scores, and audio project files, which typically do not contain audio data.'),
(3, 'Video Files', 'The Video Files category includes a wide range of video formats, which use different codecs to encode and compress video data. This category also includes video project files and video information files, which may not contain video data.'),
(4, 'Compressed Files', 'Compressed files use file compression in order to save disk space. Compressed archive formats can also be used to compress multiple files into a single archive. Several open and proprietary compression algorithms can be used to compress files, which is why many different compressed file types exist.'),
(5, 'Spreadsheet Files', 'Spreadsheet files store data in cells, which are organized into rows and columns. Each cell may contain a certain type of data, such as a text string, number, or date. Cells may also contain formulas, which reference other cells.'),
(6, 'eBook Files', 'eBook files are digital books designed to be viewed on eReaders, such as the Amazon Kindle, Sony Reader, Barnes and Noble Nook, and the iPad. However, they can often be viewed on a PC using eReader software as well. While many eBook formats can be viewed on multiple devices, some proprietary eBook formats can only be viewed using specific hardware or software.'),
(7, 'Executable Files', 'Executable files contain code that is run when the file is opened. Windows programs, Mac OS X applications, scripts, and macros are all considered executable files. Since these file types run code when opened, unknown executable files, such as those received as e-mail attachements, should not be opened.'),
(8, 'Raster Image Files', 'Raster graphics are the most common type of image files. They are comprised of a grid of pixels where each pixel represents an individual color within the image. Both Web graphics and digital photos are stored as raster graphics. While some raster image formats are uncompressed, most use some type of image compression.'),
(9, 'Camera Raw Files', 'Camera raw files are image files created by digital cameras. They are saved in an uncompressed and unprocessed format that stores the exact data captured by the camera sensor. Because each type of digital camera has a different sensor, many different types of camera raw formats exist. In order to open a camera raw file, the program must support both the file type and the specific camera model that captured the image.'),
(10, 'Vector Image Files', 'Vector graphics are made up of paths, rather than individual pixels. These paths can be used to represent lines and shapes within the image. Most vector image formats can also include colors, gradients, and image effects. Since vector graphics store image data as paths, they can be enlarged without losing quality, which makes them a good choice for logos and other types of drawings.'),
(11, '3D Image Files', '3D image files include three-dimensional models, 3D animations, and 3D project files. 3D models are typically comprised of polygons and verticies and that create the model shape. They may also include textures as well as lighting and shading information.'),
(12, 'Page Layout Files', 'Page layout files are documents that may contain both text and image data. They also include formatting information, which defines the page size, margins, and how content is organized on the page. Page layout documents are often used for creating printable publications, such as newspapers, magazines, and brochures.'),
(13, 'Developer Files', 'The Developer Files category contains files related to software development. These include programming project files, source code files, code libraries, header files, and class files. Compiled objects and components are also included in this category.'),
(14, 'Database Files', 'Database files store data in a structured format, organized into tables and fields. Individual entries within a database are called records. Databases are commonly used for storing data referenced by dynamic websites.'),
(15, 'Game Files', 'The Game Files category includes saved video game files and files referenced by video games. It also includes game ROMs, which are software copies of games developed for other systems, such as Super Nintendo and Nintendo 64. These files can be played using a software emulator.'),
(16, 'Web Files', 'The Web Files category includes files related to websites and Web servers. These include static and dynamic webpages, Web applications, and files referenced by webpages. Files generated by Web development software are also included in this category.'),
(17, 'CAD Files', 'CAD (Computer-Aided Design) files may contain 2D or 3D designs. They are generated by CAD software programs, which can be used to create models or architecture plans. 2D CAD files are often referred to as drawings, while 3D files are often called models, parts, or assemblies.'),
(18, 'GIS Files', 'The GIS (Geographic Information Systems) category includes files related to GPS devices and mapping software. These files may contain maps, saved routes, and waypoints. Many GIS files are saved in open formats, which can be transferred between GPS devices and computer systems.'),
(19, 'Plugin Files', 'Plugin files provide extra features and functionality to existing programs. They are commonly used by image, video, and audio editing applications, as well as Web browsers. Plugins are also referred to as add-ons and extensions.'),
(20, 'Font Files', 'Font files contain one or more fonts that can be accessed by the operating system and applications. Most modern fonts are stored in either the OpenType or TrueType formats, which can be used by both Macintosh and Windows computers.'),
(21, 'System Files', 'The System Files category includes files related to Mac, Windows, and Linux operating systems. Some examples include system libraries, icons, themes, and device drivers. Files output by the system are also included in this category.'),
(22, 'Settings Files', 'Settings files store settings for the operating system and applications. These files are not meant to be opened by the user, but are modified by the corresponding application when the program preferences are changed. Settings files may also be called preference files or configuraton files.'),
(23, 'Encoded Files', 'Encoded files are files that store data in an encoded format. These include encrypted files, uncompressed archives, and binary-encoded text files. Files are often encoded for security purposes and to keep them from being corrupted during data tranfers.'),
(24, 'Disk Image Files', 'Disk image files contain an exact copy of a hard disk or other type of media. They include all the files, as well as the file system information. This allows disk images to be used for duplicating disks, CDs, and DVDs. They are often used for backup purposes as well.'),
(25, 'Backup Files', 'The Backup Files category includes individual file backups and files related to backup software. Individual backup files are often generated automatically by software programs. Backup software files include incremental backups and full system backups.'),
(26, 'Data Files', 'Data files are the most common type of computer files. They may be installed with applications or created by users. Most data files are saved in a binary format, though some store data as plain text. Examples of data files include libraries, project files, and saved documents. NOTE: The Data Files category encompasses other more specific categories. File types that do not fit within these subcategories are placed in this category.'),
(27, 'Misc Files', 'The Misc Files category contains miscellaneous file types that do not fit within other categories. Some examples are partially downloaded files, installer files, and renamed files. This category may also include files related to other hardware devices besides computers.');
-- --------------------------------------------------------

--
-- Table structure for table `soft_category`
--
DROP TABLE IF EXISTS `soft_category`;

CREATE TABLE `soft_category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `icon` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `soft_category`
--
INSERT INTO `soft_category` (`id`, `name`, `icon`) VALUES
(1, 'Productivity', 'default.png'),
(2, 'Educational', 'default.png'),
(3, 'Audio', 'default.png'),
(4, 'Video', 'default.png'),
(5, 'Grapics', 'default.png'),
(6, 'Internet', 'default.png'),
(7, 'Utility', 'default.png'),
(8, 'System', 'default.png'),
(9, 'Scientific', 'default.png'),
(10, 'Programming', 'default.png'),
(11, 'Gaming', 'default.png');

 -- --------------------------------------------------------

--
-- Table structure for table `platform`
--
DROP TABLE IF EXISTS `platform`;

CREATE TABLE `platform` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `icon` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `platform`
--
INSERT INTO `platform` (`id`, `name`, `icon`) VALUES
(1, 'Android', 'android.png'),
(2, 'IOS', 'ios.png'),
(3, 'Mac', 'mac.png'),
(4, 'Web', 'web.png'),
(5, 'Windows', 'windows.png');

 -- --------------------------------------------------------

--
-- Table structure for table `company`
--
DROP TABLE IF EXISTS `company`;

CREATE TABLE `company` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company`
--
INSERT INTO `company` (`id`, `name`) VALUES
(1, 'Microsoft'),
(2, 'Adobe'),
(3, 'Akeeba'),
(4, 'Apple'),
(5, 'Google');

 -- --------------------------------------------------------

--
-- Table structure for table `software`
--
DROP TABLE IF EXISTS `software`;

CREATE TABLE `software` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `icon` varchar(100) NOT NULL,
  `featured_image` varchar(100) NULL,
  `primary_type_id` int(11) NOT NULL, 
  `company_id` int(11) NOT NULL,
  `version` varchar(20) NOT NULL,
  `update_day` varchar(20) NOT NULL,
  `license` varchar(20) NOT NULL,
  `star` numeric(2,1) NOT NULL,
  `vote` int(10) NOT NULL,
  `vote_res` numeric(12,1) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `overview` text NULL,
  `main_feature` text NULL,
  `url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `software`
--

INSERT INTO `software` (`id`, `name`, `icon`, `featured_image`, `primary_type_id`, `company_id`, `version`, `update_day`, `license`, `star`, `vote`, `vote_res`, `cat_id`, `overview`, `main_feature`, `url`) VALUES
(1, 'Notepad', 'microsoft_notepad.png', 'microsoft_notepad_307.jpg', 1, 1, '1903', '8/8/2019', 'Bundled', 4.7, 904, 4248.8, 1, 'Microsoft Notepad is a simple text editor included with Microsoft Windows. While the program is limited in features, it is still useful in various contexts for viewing and editing plain text files.\\nBecause Notepad is a plain text editor, it only provides basic formatting features. You won’t get the same features that a word processor like Microsoft Word offers, such as graphics or page formatting support. However, you can still word wrap your text and choose the font, style, size, and script. Notepad supports different text encoding modes including Unicode, UTF-8, big-endian Unicode, and ANSI.\\nNobody will try to boast about Notepad text editing features. Yet, the program is still useful in many contexts, such as when taking notes, when viewing text files, and when making edits to source code files. For these reasons, Notepad is a popularly-used text editor.', 'Provides a simple, bare bones text editing interface && Opens any file that is stored in plain text && Detects textual encoding', 'https://www.microsoft.com/en-us/p/windows-notepad'),
(2, 'Word', 'microsoft_word.png', 'microsoft_excel_18.png', 3, 1, '365', '2/12/2021', 'Commercial', 4.3, 251, 1079.3, 1, 'Microsoft Excel is a widely-used spreadsheet program that is part of the Microsoft Office suite. It provides a powerful feature set for organizing, manipulating, and visualizing data. \\n Excel workbooks are divided by tabbed worksheets, each of which can be edited independently. Each worksheet contains a two-dimensional grid of cells, which can be formatted in various ways. Excel includes basic features, such as data sorting and simple formula creation, as well as advanced capabilities, such as pivot table reports and VBScript macro scripting. It also provides document security and password protection for data within a workbook. Newer versions of Excel save workbooks in the Office Open XML (OOXML) .XLSX format, while older versions use the proprietary .XLS format. \\n Excel has many tools that help quickly analyze data. From data import features to automatic sorting, filtering, and pivot tables, users can take large external data sets and gather analyses quickly. The extensive set of mathematical functions also gives the ability to manipulate data and compute results. Excel provides thousands of online templates available for download within the user interface. This gives users many different options for out-of-the-box styling, formatting, and mathematical computation, allowing them to focus on the data rather than extensive amounts of time on presentation. For example, financial templates can be downloaded by home or business users for tracking income, expenses, and transactions, as well as for automatically generating summary graphs. \\n The spreadsheet application also provides rich tools for visualizing data. Excel supports simple chart types such as bar charts, line graphs, pie charts, and scatter plots, as well as more complex ones for more in-depth analysis. These charts can be styled with a variety of visual options. \\n Microsoft Excel is a great program for your data management needs. Whether you are using it for personal, academic, or professional purposes, you will appreciate Excel’s ability to quickly organize and manipulate data to perform statistical analyses and create visualizations. These reasons among others are what make Excel an industry-standard application. \\n', 'Support for XLSX and XLS formats, and various other spreadsheet types && Basic and advanced data manipulation && Processing power for large data sets && Can import and export data in many different formats && Complex mathematical formula support && Advanced support for VBScript scripting && Large number of charts and functions', 'https://www.microsoft.com/en-us/microsoft-365/word'),
(3, 'Excel', 'microsoft_excel.png', 'microsoft_excel_18.png', 5, 1, '365', '12/9/2021', 'Commercial', 4.3, 171, 735.3, 1, 'Microsoft Excel is a widely-used spreadsheet program that is part of the Microsoft Office suite. It provides a powerful feature set for organizing, manipulating, and visualizing data. \\n Excel workbooks are divided by tabbed worksheets, each of which can be edited independently. Each worksheet contains a two-dimensional grid of cells, which can be formatted in various ways. Excel includes basic features, such as data sorting and simple formula creation, as well as advanced capabilities, such as pivot table reports and VBScript macro scripting. It also provides document security and password protection for data within a workbook. Newer versions of Excel save workbooks in the Office Open XML (OOXML) .XLSX format, while older versions use the proprietary .XLS format. \\n Excel has many tools that help quickly analyze data. From data import features to automatic sorting, filtering, and pivot tables, users can take large external data sets and gather analyses quickly. The extensive set of mathematical functions also gives the ability to manipulate data and compute results. Excel provides thousands of online templates available for download within the user interface. This gives users many different options for out-of-the-box styling, formatting, and mathematical computation, allowing them to focus on the data rather than extensive amounts of time on presentation. For example, financial templates can be downloaded by home or business users for tracking income, expenses, and transactions, as well as for automatically generating summary graphs. \\n The spreadsheet application also provides rich tools for visualizing data. Excel supports simple chart types such as bar charts, line graphs, pie charts, and scatter plots, as well as more complex ones for more in-depth analysis. These charts can be styled with a variety of visual options. \\n Microsoft Excel is a great program for your data management needs. Whether you are using it for personal, academic, or professional purposes, you will appreciate Excel’s ability to quickly organize and manipulate data to perform statistical analyses and create visualizations. These reasons among others are what make Excel an industry-standard application. \\n', 'Support for XLSX and XLS formats, and various other spreadsheet types && Basic and advanced data manipulation && Processing power for large data sets && Can import and export data in many different formats && Complex mathematical formula support && Advanced support for VBScript scripting && Large number of charts and functions', 'https://www.microsoft.com/en-us/microsoft-365/excel');
 -- --------------------------------------------------------

--
-- Table structure for table `platform`
--
DROP TABLE IF EXISTS `platform_of_software`;

CREATE TABLE `platform_of_software` (
  `id` int(11) NOT NULL,
  `platform_id` int(11) NOT NULL,
  `software_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `platform_of_software`
--
INSERT INTO `platform_of_software` (`id`, `platform_id`, `software_id`) VALUES
(1, 5, 1),
(2, 5, 2),
(3, 3, 2),
(4, 5, 3),
(5, 3, 3);
 -- --------------------------------------------------------
-- Indexes for table `file`
--
ALTER TABLE `file`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `file_type`
--
ALTER TABLE `file_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `soft_category`
--
ALTER TABLE `soft_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `platform`
--
ALTER TABLE `platform`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `software`
--
ALTER TABLE `software`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `platform_of_software`
--
ALTER TABLE `platform_of_software`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for table `file`
--
ALTER TABLE `file_type`
  ADD CONSTRAINT `fk_file_id` FOREIGN KEY (`file_id`) REFERENCES `file` (`id`),
  ADD CONSTRAINT `fk_cat_id` FOREIGN KEY (`cat_id`) REFERENCES `category` (`id`),
  ADD CONSTRAINT `fk_soft_id` FOREIGN KEY (`soft_id`) REFERENCES `software` (`id`);

--
-- Constraints for table `software`
--
ALTER TABLE `software`
  ADD CONSTRAINT `fk_soft_cat_id` FOREIGN KEY (`cat_id`) REFERENCES `soft_category` (`id`),
  ADD CONSTRAINT `fk_company_id` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`),
  ADD CONSTRAINT `fk_primary_type_id` FOREIGN KEY (`primary_type_id`) REFERENCES `file_type` (`id`);
  
--
-- Constraints for table `platform_of_software`
--
ALTER TABLE `platform_of_software`
  ADD CONSTRAINT `fk_platform_id` FOREIGN KEY (`platform_id`) REFERENCES `platform` (`id`),
  ADD CONSTRAINT `fk_software_id` FOREIGN KEY (`software_id`) REFERENCES `software` (`id`);

--

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
